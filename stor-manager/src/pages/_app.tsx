import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import './styles/globals.css'
import ThemeProvider from '@/context/context'
import MainLayout from '@/components/main-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>  
  )
}

export default MyApp