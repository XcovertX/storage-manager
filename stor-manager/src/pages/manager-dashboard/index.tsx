import NewTenant from "@/components/modals/new-tenant";
import PropertyInformation from "@/components/property-information";
import SiteMap from "@/components/site-map/site-map";
import { Site } from "@/interfaces/site";

const Yelm: Site = {
    name: 'Stor-House, Yelm',
    address: '10512 Creek St. SE, Yelm Wa, 98597',
    phone: 3604001212,
    floorCount: 3,
    manager: {
        firstName: 'James',
        lastName: 'Covert',
        id: 1234567890,
        startDate: new Date('08/1/18'),
        site: 'Yelm'
    }
}

function ManagerDashboardPage() {
    return (
        <div className="p-2  h-full bg-green-500">
            
        </div>
    );
  }
  
  export default ManagerDashboardPage;