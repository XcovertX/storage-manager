import dbConnect from "@/lib/dbConnect"
import Employee, { Employees } from "@/models/employee";
import { GetServerSideProps } from "next"

type Props = {
    employee: Employee;
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
    return { props: { facilities: facilities } }
  }