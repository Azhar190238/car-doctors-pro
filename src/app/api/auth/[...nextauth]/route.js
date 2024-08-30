// import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
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

                const db = connectDB();
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
        })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }