// import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize (credentials) {
                // return true;
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }

                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null;
                }
                const passwordMatch = bcrypt.compareSync(password, currentUser.password); // true
                if (!passwordMatch) {
                    return null;
                }
                return currentUser;
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          }),
  
          GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
          }),
          FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
          })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }







//         strategy: "jwt",
//         maxAge: 30 * 24 * 60 * 60,
//     },
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email: {},
//                 password: {},
//             },
//             async authorize(credentials) {
//                 const { email, password } = credentials;
//                 if (!email || !password) {
//                     return null;
//                 }
//                 const db = await connectDB();
//                 const currentUser = await db.collection("users").findOne({ email });
//                 if (!currentUser) {
//                     return null;
//                 }
//                 const passwordMatched = bcrypt.compareSync(
//                     password,
//                     currentUser.password
//                 );
//                 if (!passwordMatched) {
//                     return null;
//                 }
//                 return currentUser;
//             },
//         }),
//         // GoogleProvider({
//         //     clientId: process.env.GOOGLE_CLIENT_ID,
//         //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         // }),
//         // GitHubProvider({
//         //     clientId: process.env.GITHUB_ID,
//         //     clientSecret: process.env.GITHUB_SECRET
//         // })
//     ],
//     pages: {
//         signIn: "/login",

//     },
//     callbacks: {}
// });

// export { handler as GET, handler as POST };