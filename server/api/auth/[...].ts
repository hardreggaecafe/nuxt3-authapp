import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    secret: 'my-superb-secret',
    redirect_uri: 'http://localhost:3000/done',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: '8ef1f641b5705b75373c',
           clientSecret: 'db83a5af49555525899468b7e5247e6dcc11aed2'
        })
    ]
})

