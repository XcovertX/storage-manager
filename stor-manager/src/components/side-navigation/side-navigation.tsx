import { useState } from "react";
import { CaretIcon } from "../caret-icon";
import classNames from "classnames";

function SideNav() {
    const [open, setOpen] = useState(true);
    function handleOpen() {
        setOpen(!open);
    }
    return (
        <div className={`${open? 'w-60' : 'w-10'} transition-all duration-500 bg-red-500 flex flex-col justify-start`}>
            <button onClick={handleOpen} className='bg-green-400 text-start p-2'>
                <div className="rotate-90 bg-blue-800 w-fit">
                    <CaretIcon 
                    height={20}
                    width={20}
                    className={open? 'rotate-180' : ''}/>
                </div>
            </button>
        </div>
    );
  }
  
  export default SideNav;