import Input from "./input";

type Props = {
    email:    string;
    setEmail: Function;
}

const Email = ({ email, setEmail }: Props) => {
  
  return(
    <div className="h-full flex flex-col gap-2">
      <Input
        type="email"
        disabled={false}
        placeholder={'Email'}
        onChange={(e:any) => setEmail(e.target.value)}
        value={email} />  
    </div>
  )
}

export default Email