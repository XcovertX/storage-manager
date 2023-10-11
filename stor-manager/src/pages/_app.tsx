import Head from 'next/head'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import './styles/globals.css'
import ThemeProvider from '@/context/context'
import MainLayout from '@/components/main-layout'
import ManagerDashboardLayout from './manager-dashboard/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <ManagerDashboardLayout>
          <Component {...pageProps} />
        </ManagerDashboardLayout>
      </MainLayout>
    </ThemeProvider>  
  )
}

export default MyApp