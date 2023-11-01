import { useEffect, useState } from "react";
import Input from "./input";
import Button from "../buttons/button";

type Props = {
  availableUnits:   string[];
  units:            string[];
  setSelectedUnits: Function;
}

const UnitNumber = ({ availableUnits, units, setSelectedUnits }: Props) => {
  const [filteredAvialableUnits, setFAUnits] =useState<string[]>([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    setFAUnits(availableUnits)
  },[availableUnits])
  
  // search function automatically reduces array with each input trigger
  function setSearch(v:string) {
    function checkValue(checkV:string) {
      let result = true
      for (let index = 0; index < v.length; index++) {
        if(v[index] !== checkV[index]){
          result = false;
          break;
        }
      }
      return result
    }
    setSearchInput(v.toString())

    if(v === '') {
      setFAUnits(availableUnits)
    } else {
      setFAUnits(availableUnits.filter(checkValue))
    }
  }

  const FilterUnits = (
      <div className="w-full flex flex-row gap-2 items-center">
        <Input
          type="text"
          disabled={false}
          placeholder={'Search'}
          onChange={(e:any) => setSearch(e.target.value)}
          value={searchInput} 
        /> 
      </div>
    )

  function onSelect(value:string) {
    if(units.includes(value)) {
      setSelectedUnits(units.filter(u => u !== value))
    } else {
      setSelectedUnits([...units, value])
    }
  }
  return(
    <div className="flex flex-col w-full h-72 bg-neutral-800 gap-1 p-1">
      {FilterUnits}
      <div className="flex flex-col gap-2 w-full bg-opacity-70 overflow-y-auto pr-1 p-1">
      
      {filteredAvialableUnits.map(availableUnit => {
        return (
          <div key={availableUnit} className="flex flex-row justify-between w-full px-2 bg-black">
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