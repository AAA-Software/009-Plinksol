// import GoogleProvider from 'next-auth/providers/google';
// import GitHubProvider from 'next-auth/providers/github';
// import LinkedInProvider from 'next-auth/providers/linkedin';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import Google from 'next-auth/providers/google';
// // import type { NextAuthOptions } from 'next-auth';

// export const options = {
//     providers: [
//         GoogleProvider({
//             profile(profile) {
//                 console.log('profile google:', profile);

//                 let userRole = 'Google User'
//                 if(profile?.email === 'mahamuduhalic@gmail.com'){
//                     userRole = 'admin';
//                 }

//                 return {
//                     ...profile,
//                     role: userRole,
//                     id: profile.sub,
//                 }
//             },
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET
//         }),
//         GitHubProvider({
//             profile(profile) {
//                 console.log('profile github:', profile);

//                 let userRole = 'GitHub User'
//                 if(profile?.email === 'mahamuduhalic@gmail.com'){
//                     userRole = 'admin';
//                 }

//                 return {
//                     ...profile,
//                     role: userRole,
//                 }
//             },
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET
//         }),
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: {
//                     label: "Email Address",
//                     type: "email",
//                     placeholder: "name@gmail.com",
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password",
//                     placeholder: "Enter password",
//                 }
//             },
//             async authorize(credentials){

//                 const user = {id: '43', name: "halic", password: "password"}
//                 if (credentials?.username === user.name && credentials?.password === user.password){
//                     return user
//                 } else{
//                     return null
//                 }
//             }
//         })
//         // LinkedInProvider({
//         //     profile(profile) {
//         //         console.log('profile linkedin:', profile);

//         //         let userRole = 'LinkedIn User'
//         //         if(profile?.email === 'mahamuduhalic@gmail.com'){
//         //             userRole = 'admin';
//         //         }

//         //         return {
//         //             ...profile,
//         //             role: userRole,
//         //             id: profile.sub,
//         //         }
//         //     },
//         //     clientId: process.env.LINKEDIN_ID,
//         //     clientSecret: process.env.LINKEDIN_SECRET
//         // })
//     ],
//     callbacks: {
//         async jwt({token, user}){
//             if(user) token.role =  user.role;
//             return token
//         },
//         async session({token, session}){
//             if(session?.user) session.user.role = token.role;
//             return session
//         },
//     }
// }