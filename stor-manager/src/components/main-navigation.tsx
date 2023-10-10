import Dropdown from "./dropdown"
import Title from "./title"

  const MainNavigation = () => {
    return (
    <div className="min-w-screen bg-green-500 flex flex-row justify-start">
        <Title />
        <Dropdown title="Properties" />
        <Dropdown title="Units" />
        <Dropdown title="Tenants" />
        <Dropdown title="Accounting" />
        <Dropdown title="Maintenance" />
        <Dropdown title="Admin" />
        <Dropdown title="Reporting" />
    </div>

    )
  }
  
  export default MainNavigation