import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import './styles/globals.css'
import ThemeProvider from '@/context/context'
import MainLayout from '@/components/main-layout'
import ManagerDashboardLayout from './manager-dashboard/layout'
import { SessionProvider } from "next-auth/react"

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <MainLayout>
          <ManagerDashboardLayout>
            <Component {...pageProps} />
          </ManagerDashboardLayout>
        </MainLayout>
      </ThemeProvider>
    </SessionProvider>  
  )
}

export default MyApp