import Input from "./input";

type Props = {
    accessNumber:    string;
    setAccessNumber: Function;
}

const GateAccess = ({ accessNumber, setAccessNumber }: Props) => {
  
  return(
    <div className="h-full flex flex-col gap-2">
      <Input
        type="test"
        disabled={false}
        placeholder={'Gate Code'}
        onChange={(e:any) => setAccessNumber(e.target.value)}
        value={accessNumber} />  
    </div>
  )
}

export default GateAccess