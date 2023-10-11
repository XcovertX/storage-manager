import PropertyInformation from "@/components/property-information";
import SideNav from "@/components/side-navigation/side-navigation";

function ManagerDashboardPage() {
    return (
      <div className="flex flex-col h-full grow justify-start bg-blue-500">
        <div className="flex flex-row justify-start h-full grow">
          <SideNav />
          <div className="w-full">
            <PropertyInformation />
          </div>
        </div>
      </div>
    );
  }
  
  export default ManagerDashboardPage;