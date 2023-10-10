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
      <div className="min-h-screen">
        <MainNavigation />
        <main>{children}</main>
      </div>
    </>
  )
}

export default MainLayout