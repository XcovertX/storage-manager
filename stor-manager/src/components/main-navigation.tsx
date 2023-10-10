import { useState } from "react";
import Dropdown from "./dropdown"
import PropertiesDropdown from "./properties-dropdown"
import Title from "./title"

  const MainNavigation = () => {
    const [currentOpen, setCurrentOpen] = useState(-1);

    function handleSwitch(key: number){
        setCurrentOpen(key)
    }
    return (
    <div className="min-w-screen bg-green-500 flex flex-row justify-start">
        <Title />
        <PropertiesDropdown handleSwitch={handleSwitch} currentOpen={currentOpen} />
    </div>

    )
  }
  
  export default MainNavigation