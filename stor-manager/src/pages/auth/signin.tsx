import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getCsrfToken, getProviders } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <form method="post" action="/api/auth/callback/credentials" className="flex flex-col bg-green-700">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email
        <input name="email" type="text" className="text-black"/>
      </label>
      <label>
        Password
        <input name="password" type="password" className="text-black"/>
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)

    if (session) {
        return { redirect: { destination: "/"} }
    }

    const providers = await getProviders();
  return {
    props: {
      providers:  providers ?? [],
      csrfToken: await getCsrfToken(context)
    },
  }
}