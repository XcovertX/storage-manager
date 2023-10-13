import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data } = useSession()
  if (data) {
    console.log('hhhhhhhhhhhhhhhhhhhhhh')
    console.log(data.user)
    return (
      <>
        Signed in as {data.user.email}<br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}