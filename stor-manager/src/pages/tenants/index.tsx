import dbConnect from "@/lib/dbConnect"
import { GetServerSideProps } from "next"
import  Tenant,  { Tenant as T } from '@/models/tenant'
import AllTenants from "@/components/tables/all-tenants-table"

type Props = {
    tenants: T[]
}

const Index = ({ tenants }: Props) => {
    return <AllTenants tenants={tenants} />
}

/* Retrieves all tenants data from mongodb database */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    await dbConnect()
  
    /* find all the data in the database */
    const tenantResult = await Tenant.find()
  
    /* Ensures all objectIds and nested objectIds are serialized as JSON data */
    const tenants = tenantResult.map((doc) => {
      const tenant = JSON.parse(JSON.stringify(doc))
      return tenant
    })
    console.log('tenantsResult:', tenantResult)
    console.log('tenants:', tenants)
    return { props: { tenants: tenants } }
}

export default Index