import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET
})

export default authOptions
