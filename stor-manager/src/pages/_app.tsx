import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import './styles/globals.css'
import ThemeProvider from '@/context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>  
  )
}

export default MyApp