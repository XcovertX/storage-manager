import { useState } from "react";
import Input from "./input";

type Props = {
  availableUnits:   number[];
  units:            number[];
  setSelectedUnits: Function;
}

const UnitNumber = ({ availableUnits, units, setSelectedUnits }: Props) => {

  function onSelect(value:number) {
    if(units.includes(value)) {
      setSelectedUnits(units.filter(u =>
        u !== value))
    } else {
      setSelectedUnits([...units, value])
    }
  }
  return(
    <div className="flex flex-row w-[200px]">
    <div className="h-full flex flex-col gap-2 w-full">
      {availableUnits.map(availableUnit => {
        return (
          <div key={availableUnit} className="flex flex-row justify-end w-full">
            <div className=''>
            <Input
            
              type="checkbox"
              disabled={false}
              placeholder={'Unit'}
              onChange={(e:any) => onSelect(e.target.value)}
              value={availableUnit} 
            />
            </div>
            <h1 className='pl-5 text-end'>{availableUnit}</h1>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default UnitNumber