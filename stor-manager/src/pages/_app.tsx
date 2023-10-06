import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stor-Pro</title>
      </Head>

      <div className="top-bar">
        <div className="flex flex-row p-5">
          <Link href="/">Home</Link>
          <Link href="/customer-dashboard">customer-dashboard</Link>
        </div>
      </div>
      <div className="wrapper grid">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp