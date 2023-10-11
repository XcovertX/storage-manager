import DropdownItem from "@/interfaces/dropdown-item";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { CaretIcon } from "../icons/caret-icon";
import Image from "next/image";
import Link from "next/link";
type Props = {
    title:         string;
    dropdownItems: DropdownItem[];
    currentOpen:   number;
    handleSwitch:  Function;
    id:            number
  }

  type EntryProps = {
    title: string;
    link: string;
  }
  
  const Dropdown = ({ title, dropdownItems, currentOpen, handleSwitch, id }: Props) => {
    const [open, setOpen] = useState(false);

    useEffect(() =>{
        if(currentOpen == id) {
            setOpen(!open);
        } else {
            setOpen(false);
        }
    }, [currentOpen]);
    
    return (
        <button 
            className="bg-green-800 mx-2"
            onClick={currentOpen == id? () => {
                handleSwitch(-1);
            } 
            : 
            () => {
                handleSwitch(id);
            }}
        >
            <input
                id="expandCollapse"
                checked={open}
                readOnly
                type="checkbox"
                className="peer sr-only"
            />
            <div className='flex flex-row justify-between items-center p-2'>
                {title}
                <CaretIcon
                    height={20}
                    width={20}
                    className={classNames("ml-2 md:ml-4", {
                    "rotate-180": open,
                    })}
                />
            </div>
            
            <div
                className={classNames(
                    "overflow-hidden mb-1 mt-1 max-h-0 bg-green-800 rounded-md fixed",
                    "peer-checked:max-h-60 peer-checked:mt-2 peer-checked:mb-2",
                    "transition-all duration-1000 ease-in-out",
                )}
            >
                
                <label
                    htmlFor="expandCollapse"
                    className={classNames(
                        `w-full flex justify-between items-center text-zinc-100 rounded-md`,
                        "transition-colors duration-1000 ease-in-out"
                    )}
                >
                    <div className="flex flex-col justify-start">
                        {dropdownItems.map((item, i) => (
                            <div key={i} className="hover:bg-green-500 w-full justify-start flex flex-row py-2 md:py-3 px-2 md:px-5">
                            <Entry
                                key={i}
                                title={item.title}
                                link={item.link}/>
                            </div>
                        ))}
                    </div>
                </label>  
            </div>
        </button>
    
    )
  }

  const Entry = ({ title, link }: EntryProps) => {


    return (
        <Link href={link} className="">
            {title}
        </Link>
      );
     };
  
  export default Dropdown