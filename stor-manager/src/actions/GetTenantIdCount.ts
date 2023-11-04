
export default async function getOrders() {
    const baseUrl = process.env.API_URL;
    
    try {
      const res = await fetch(`${baseUrl}/api/order`, { next: { revalidate: 0 } } );
    
      if (!res.ok) {
        console.error(res);
        throw new Error(`ERROR: could not retrieve orders`);
      }
    
      return res.json();
    } catch(error) {
      console.error(error)
    }
  }

  export async function getTenantIdCount() {
    const baseUrl = process.env.API_URL;
    try{

      const res = await fetch(`${baseUrl}/api/counters`, { next: { revalidate: 0 } } );
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    } catch(error) {
      console.error("ERROR: Tenant Id Count: ", error)
      return null;
    }
  }