import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  sendEmailVerification
} from 'firebase/auth'
export const useAuth = () => {
  const token = useState<string>('token', () => "")
  var user_data

  // メールアドレス新規登録関数
  async function signUp(email:string, password:string){
    return await new Promise((resolve)=>{
      // getAuth()でAuthを取得
      console.log ("new Promise")
      const auth = getAuth()
      // メールアドレスとパスワードでアカウントを作成する
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log ("success")
        sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          console.log ("email sent!")
          // ...
        });
        console.log ("status:" + userCredential.user.email)
        navigateTo('/done')
        // サインアップできたらログインする
        resolve("success")
      })
      .catch((error) => {
        console.log(error)
        const errorMessage = error.message;
        resolve(errorMessage)
      })
    })
  }
  // メールアドレスとパスワードでログインする関数
  async function signIn(email: string, password: string) {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth()
      // メールアドレスとパスワードでログインする
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log ("login success")
          userCredential.user
            .getIdToken()
              .then((idToken) => {
                token.value = idToken
                console.log ("token:" + token.value)
                navigateTo('/done')
                resolve()
              })
            .catch
        })
        .catch((reject) => {
          console.log ("login falied")
        })
    })
  }
  // ログアウトする関数
  async function signOut() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth()
      // ログアウトする
      firebaseSignOut(auth)
        .then(() => {
          token.value = ""
          console.log ("logout")
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  // ログイン状態確認関数
  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      // client only
      if (process.server) return resolve()
      const auth = getAuth()
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            user_data = user
            console.log ("user:"+user.email+"/"+user.uid)
            user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken
                resolve()
              })
              .catch(reject)
          } else {
            token.value = ""
            resolve()
          }
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  // google認証関数
  async function loginWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log({ credential, token, user });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
    });
  };
  // twitter認証関数
  async function loginWithTwitter() {
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log({ credential, token, user });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
    });
  };
  return {
    signUp,
    signIn,
    signOut,
    token,
    user_data,
    checkAuthState,
    loginWithGoogle,
    loginWithTwitter
  }
}
