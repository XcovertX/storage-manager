
import dbConnect from '@/lib/dbConnect'
import { CMS_NAME } from '@/lib/constants'
import Facility, { Facilities } from '@/models/facility'
import { GetServerSideProps } from 'next'
import MainLayout from '@/components/main-layout'
import Head from 'next/head'
import Container from '@/components/container'
import ManagerDashboardPage from './manager-dashboard'
import { useSession } from "next-auth/react"
import Employee, { Employees } from '@/models/employee'
import Login from '@/components/buttons/login-btn'
import NewTenant from '@/components/forms/new-tenant-form'

type Props = {
  facilities: Facilities[];
  employees:  Employees[]
}

const Index = ({ facilities, employees }: Props) => {
  const { data } = useSession()
  console.log(data)
  return (
    <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Container>
        {data?.accessToken? 
        <ManagerDashboardPage /> : <Login/> }
      </Container>
    </>
  )
}

// /* Retrieves facilities data from mongodb database */
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   await dbConnect()

//   /* find all the data in the database */
//   // const facilityResult = await Facility.find()
//   const employeeResult = await Employee.find()

//   // /* Ensures all objectIds and nested objectIds are serialized as JSON data */
//   // const facilities = facilityResult.map((doc) => {
//   //   const facility = JSON.parse(JSON.stringify(doc))
//   //   return facility
//   // })
//   // const employees = employeeResult.map((doc) => {
//   //   const employee = JSON.parse(JSON.stringify(doc))
//   //   return employee
//   // })
//   return { props: { 
//     // facilities: facilities, 
//     // employees: employees 

//   }
//    }
// }

export default Index