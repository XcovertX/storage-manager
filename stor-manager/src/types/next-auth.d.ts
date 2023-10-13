
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
    } & DefaultSession["user"]
    accessToken?: string
    
  }
  interface User {
    data: {
      email: string;
      userType: string;
    } & DefaultUser['user']
  }

  // interface Account {}

  // interface Profile {}
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
      /** OpenID ID Token */
      idToken?:     string
      provider?:    string
      accessToken?: string
    }
  }
