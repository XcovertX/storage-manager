import dbConnect from "@/lib/dbConnect"
import { GetServerSideProps } from "next"
import Tenant, { Tenants } from '@/models/tenant'

type Props = {
    tenants: Tenants[]
}

const Index = ({ tenants }: Props) => {
    return <></>
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
    return { props: { tenants: tenants } }
}

export default Index