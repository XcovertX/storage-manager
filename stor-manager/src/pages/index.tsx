import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Tenant, { Tenants } from '../models/tenant'
import { GetServerSideProps } from 'next'

type Props = {
  tenants: Tenants[]
}

const Index = ({ tenants }: Props) => {
  return (
    <div className='m-36'>
      {tenants.map((tenant) => (
        <div key={tenant._id}>
          <div className="card">
            <h5 className="">{tenant.name}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

/* Retrieves tenants data from mongodb database */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await dbConnect()

  /* find all the data in the database */
  const result = await Tenant.find({})

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  const tenants = result.map((doc) => {
    const tenant = JSON.parse(JSON.stringify(doc))
    return tenant
  })
  return { props: { tenants: tenants } }
}

export default Index