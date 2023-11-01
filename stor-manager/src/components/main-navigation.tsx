import { useState } from "react";
import PropertiesDropdown from "./dropdowns/properties-dropdown"
import Title from "./title"
import UnitsDropdown from "./dropdowns/units-dropdown";
import TenantsDropdown from "./dropdowns/tenants-dropdown";
import ReportsDropdown from "./dropdowns/reports-dropdown";
import { signOut, useSession } from "next-auth/react";

  const MainNavigation = () => {
    const [currentOpen, setCurrentOpen] = useState(-1);

    function handleSwitch(key: number){
        setCurrentOpen(key)
    }

    const { data } = useSession();
    return (
      <div className="min-w-screen bg-green-500 flex flex-row justify-between items-center">
        <div className="flex">
          <Title />
          <PropertiesDropdown handleSwitch={handleSwitch} currentOpen={currentOpen} id={0} key={0} />
          <UnitsDropdown      handleSwitch={handleSwitch} currentOpen={currentOpen} id={1} key={1}/>
          <TenantsDropdown    handleSwitch={handleSwitch} currentOpen={currentOpen} id={2} key={2}/>
          <ReportsDropdown    handleSwitch={handleSwitch} currentOpen={currentOpen} id={3} key={3}/>
        </div>
        <div className="flex items-center">
          Signed in as {data?.user.email}
          <button onClick={() => signOut()} className="ml-5 p-2 bg-green-700">sign out</button>
        </div>
      </div>
    )
  }

  
  export default MainNavigation