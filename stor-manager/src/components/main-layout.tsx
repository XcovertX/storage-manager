

import MainNavigation from './main-navigation'
import Meta from './meta'
import { useSession } from 'next-auth/react'


type Props = {
  children: React.ReactNode
}

const MainLayout = ({  children }: Props) => {
  const { data, status } = useSession();
  const loatding = status === 'loading';

    return (
      <>
        <Meta />
        <div className="min-h-screen flex flex-col bg-red-900">
          {data? <MainNavigation /> : <></>}
          <main className='p-2 flex flex-col grow bg-yellow-500 overflow-y-auto '>{children}</main>
        </div>
      </>
    )
  } 

export default MainLayout