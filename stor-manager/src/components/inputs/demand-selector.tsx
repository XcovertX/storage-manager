import { useEffect, useState } from "react";
import Input from "./input";
import Button from "../buttons/button";

type Props = {
  demand:    string;
  setDemand: Function;
}

const DemandTypeSelector = ({ demand, setDemand }: Props) => {
  const [driveBy,   setDriveBy] = useState(false)
  const [webForm,   setWebForm] = useState(false)
  const [call,         setCall] = useState(false)
  const [refferal, setRefferal] = useState(false)
  const [loyalty,   setLoyalty] = useState(false)

  useEffect(() => {

    setDriveBy(false)
    setWebForm(false)
    setCall(false)
    setRefferal(false)
    setLoyalty(false)
    
    if(demand === 'DriveBy') {
      setDriveBy(true);
    } 
    else if( demand === 'WebForm'){
      setWebForm(true)
    }
    else if( demand === 'Call'){
      setCall(true)
    }
    else if( demand === 'Refferal'){
      setRefferal(true)
    }
    else if( demand === 'Loyalty'){
      setLoyalty(true)
    }
  }, [demand])

  function onSelect(value:string) {
    setDemand(value)
  }
  return(
    <div className="flex flex-col w-full h-fit bg-neutral-800 gap-1 p-2">
      <div className="flex flex-col gap-2 w-full bg-opacity-70 overflow-y-auto">
        <div className="flex flex-row justify-between w-full px-2 bg-black">
          <div className=''>
            <Input
              type="checkbox"
              checked={driveBy}
              disabled={false}
              placeholder={'Demand'}
              onChange={(e:any) => onSelect(e.target.value)}
              value={'DriveBy'} 
            />
          </div>
          <h1 className='pl-5 text-end'>Drive By</h1>
        </div>
        <div className="flex flex-row justify-between w-full px-2 bg-black">
          <div className=''>
            <Input
              type="checkbox"
              checked={webForm}
              disabled={false}
              placeholder={'Demand'}
              onChange={(e:any) => onSelect(e.target.value)}
              value={'WebForm'} 
            />
          </div>
          <h1 className='pl-5 text-end'>Web Form</h1>
        </div>
        <div className="flex flex-row justify-between w-full px-2 bg-black">
          <div className=''>
            <Input
              type="checkbox"
              checked={call}
              disabled={false}
              placeholder={'Demand'}
              onChange={(e:any) => onSelect(e.target.value)}
              value={'Call'} 
            />
          </div>
          <h1 className='pl-5 text-end'>Call</h1>
        </div>
        <div className="flex flex-row justify-between w-full px-2 bg-black">
          <div className=''>
            <Input
              type="checkbox"
              checked={refferal}
              disabled={false}
              placeholder={'Demand'}
              onChange={(e:any) => onSelect(e.target.value)}
              value={'Refferal'} 
            />
          </div>
          <h1 className='pl-5 text-end'>Refferal</h1>
        </div>
        <div className="flex flex-row justify-between w-full px-2 bg-black">
          <div className=''>
            <Input
              type="checkbox"
              checked={loyalty}
              disabled={false}
              placeholder={'Demand'}
              onChange={(e:any) => onSelect(e.target.value)}
              value={'Loyalty'} 
            />
          </div>
          <h1 className='pl-5 text-end'>Loyalty</h1>
        </div>
      </div>
    </div>
  )
}

export default DemandTypeSelector