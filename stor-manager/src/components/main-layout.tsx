import MainNavigation from './main-navigation'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const MainLayout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col bg-red-900">
        <MainNavigation />
        <main className='p-2 flex flex-col grow bg-yellow-500'>{children}</main>
      </div>
    </>
  )
}

export default MainLayout