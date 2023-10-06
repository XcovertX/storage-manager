import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import './styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stor-Pro</title>
      </Head>

      <div className="bg-blue-300">
        <div className="flex flex-row p-2">
          <Link className='p-5 m-5 bg-green-500' href="/">Home</Link>
          <Link className='p-5 m-5 bg-green-500' href="/customer-dashboard">customer-dashboard</Link>
        </div>
      </div>
      <div className="wrapper grid">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp