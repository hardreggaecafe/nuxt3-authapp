import { NuxtAuthHandler } from '#auth'
//import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    secret: 'my-superb-secret',
    providers: [
    ]
})

