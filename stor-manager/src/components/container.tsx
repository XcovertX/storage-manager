// import { Analytics } from '@vercel/analytics/react';

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
  <div className="grow flex flex-col">
    {children}
    {/* <Analytics /> */}
    </div>
  )
}

export default Container