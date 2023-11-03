export default async function getSingleCustomerByUserId(tenantId: bigint) {
    const baseUrl = process.env.URL;
    try{
      const res = await fetch(`${baseUrl}/api/tenant/${tenantId}`, { next: { revalidate: 0 } } );
      if (!res.ok) {
        throw new Error(`Could not find tenant with tenantId: ${tenantId}`);
      }
      return res.json();
    } catch(error) {
      console.error(error)
      return null;
    }
  }