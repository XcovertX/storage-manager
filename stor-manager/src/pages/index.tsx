import dbConnect from '@/lib/dbConnect'
import { CMS_NAME } from '@/lib/constants'
import Facility, { Facilities } from '@/models/facility'
import { GetServerSideProps } from 'next'
import MainLayout from '@/components/main-layout'
import Head from 'next/head'
import Container from '@/components/container'
import ManagerDashboardPage from './manager-dashboard'

type Props = {
  facilities: Facilities[];
}

const Index = ({ facilities }: Props) => {
  return (
    <MainLayout>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Container>
        <ManagerDashboardPage />
      </Container>
    </MainLayout>
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