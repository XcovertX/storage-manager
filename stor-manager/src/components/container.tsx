// import { Analytics } from '@vercel/analytics/react';

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
  <div className="h-full">
    {children}
    {/* <Analytics /> */}
    </div>
  )
}

export default Container