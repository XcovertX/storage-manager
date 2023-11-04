import { getTenantIdCount } from "@/actions/GetTenantIdCount";

export async function buildTenantId() {
  try{
    const countResponse = await getTenantIdCount()
      if (!countResponse.success) {
        console.log(countResponse)
        throw new Error(`Error with fetching tenantId counter: `);
      }
      const count = countResponse.data.count
      console.log("tenant-id-builder: ", count)
        return "tenant-" + count;
      } catch(error) {
        console.error("Error: ", error)
        return null;
      }
}