import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongooseAdapter } from "@choutkamartin/mongoose-adapter"

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "johnsmith@stor-mail.com"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch("@/pages/api/employees", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id_token = account.id_token
        token.provider = account.provider
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session
    },
  },
  adapter: MongooseAdapter(MONGODB_URI),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',      // JSON Web tokens
    maxAge: 24 * 60 * 60, // max age 1 day
    updateAge: 0,         // always update database
  },
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: '/auth/signin',                 // Displays signin buttons
    signOut: '/auth/signout',               // Displays form with sign out button
    error: '/auth/error',                   // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request',  // Used for check email page
    newUser: ''                             // New users will be directed here on first sign in
  },
  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
}


export default NextAuth(authOptions);


  