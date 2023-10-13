import { useState } from "react";
import PropertiesDropdown from "./dropdown/properties-dropdown"
import Title from "./title"
import UnitsDropdown from "./dropdown/units-dropdown";
import TenantsDropdown from "./dropdown/tenants-dropdown";
import ReportsDropdown from "./dropdown/reports-dropdown";

  const MainNavigation = () => {
    const [currentOpen, setCurrentOpen] = useState(-1);

    function handleSwitch(key: number){
        setCurrentOpen(key)
    }

  
    return (
     
        <div className="min-w-screen bg-green-500 flex flex-row justify-start">
          <Title />
          <PropertiesDropdown handleSwitch={handleSwitch} currentOpen={currentOpen} id={0} key={0} />
          <UnitsDropdown      handleSwitch={handleSwitch} currentOpen={currentOpen} id={1} key={1}/>
          <TenantsDropdown    handleSwitch={handleSwitch} currentOpen={currentOpen} id={2} key={2}/>
          <ReportsDropdown    handleSwitch={handleSwitch} currentOpen={currentOpen} id={3} key={3}/>
        </div>

    )
  }

  
  export default MainNavigation