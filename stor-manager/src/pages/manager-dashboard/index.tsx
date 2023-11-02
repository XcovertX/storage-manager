'use client'
import Button from "@/components/buttons/button";
import UnitNumber from "@/components/inputs/unit-number";
import NewTenant from "@/components/modals/new-tenant";
import PropertyInformation from "@/components/property-information";
import ReportsDash from "@/components/reports-dashboard";
import Seperator from "@/components/seperator";
import SiteMap from "@/components/site-map/site-map";
import { Site } from "@/interfaces/site";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const [units, setUnits] = useState<string[]>([])
  const router = useRouter()
  return (
    <div className="p-2 h-full bg-green-500 flex-row flex gap-2">
      <div className="flex flex-col gap-2">
        <div className='flex flex-col bg-neutral-700 p-2 h-full'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-between gap-2 p-2'>
              <Button 
                label="Reserve"
                onClick={() => {}}
              />
              <Button 
                label="Rent"
                onClick={() => {router.push('/new-tenant/')}}
              />
              <Button 
                label="Prospect"
                onClick={() => {}}
              />
              <Button 
                label="Retail"
                onClick={() => {}}
              />
            </div>
          </div>
          <Seperator label="Available Units" color="border-neutral-500/[.7]"/>
          <div className="flex-row flex">
            <UnitNumber 
              availableUnits={['1111', '2222', '1212', '1110']} 
              units={units} 
              setSelectedUnits={setUnits}
            />
          </div>
        </div>
      </div> 
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-neutral-700 p-2">
          <Seperator label="Reports" color="border-neutral-500/[.7]"/>
          <div className="p-2">
            <ReportsDash 
              prospects={2}
              unpaidCharges={2744.23}
              occupancy={19.68}
              cashFlow={20994.32}
              retail={455.12}
          />
          </div>
        </div>

        <div className='flex flex-col bg-neutral-700 p-2 h-full'>
        </div>
      </div>   
    </div>
  );
}
  
  export default ManagerDashboardPage;