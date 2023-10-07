import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Facility, { Facilities } from '@/models/facility'
import Address from '@/models/address'
import { GetServerSideProps } from 'next'

type Props = {
  facilities: Facilities[];
}

const Index = ({ facilities }: Props) => {
  return (
    <div className='m-36 text-white'>
      {facilities.map((facility) => (
        <div key={facility._id}>
          <div className="text-center m-5">
            <h5 className="text-2xl font-bold">{facility.name}</h5>
            <h5 className="text-lg">{facility.address.street}</h5>
            <h5 className="text-lg">{facility.address.city}, {facility.address.state}</h5>
            <h5 className="text-lg">{facility.address.zipcode}</h5>
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
  const result = await Facility.find()

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  const facilities = result.map((doc) => {
    const facility = JSON.parse(JSON.stringify(doc))
    return facility
  })
  console.log(result)
  return { props: { facilities: facilities } }
}

export default Index