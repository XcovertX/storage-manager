import Input from "./input";

type Props = {
    accessNumber:    string;
    setAccessNumber: Function;
    plholder:           string;
}

const GateAccess = ({ accessNumber, setAccessNumber, plholder }: Props) => {
  
  return(
    <div className="h-full flex flex-col gap-2">
      <Input
        type="test"
        disabled={false}
        placeholder={plholder}
        onChange={(e:any) => setAccessNumber(e.target.value)}
        value={accessNumber} />  
    </div>
  )
}

export default GateAccess