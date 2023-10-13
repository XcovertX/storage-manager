import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getCsrfToken, getProviders } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-row justify-center items-center bg-green-700 h-full">
      <form method="post" action="/api/auth/callback/credentials" className="flex flex-col justify-center bg-green-400">
        <h1 className='text-center text-4xl'>Stor-Pro</h1>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label className='flex flex-row justify-between p-5'>
          Email
          <input name="email" type="text" className="ml-5 p-2 text-black"/>
        </label>
        <label className='flex flex-row justify-between p-5'>
          Password
          <input name="password" type="password" className="ml-5 p-2 text-black"/>
        </label>
        <button type="submit" className='p-5 bg-blue-500'>Sign in</button>
      </form>
    </div>

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