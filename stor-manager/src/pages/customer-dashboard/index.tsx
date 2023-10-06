'use client'

import { useEffect, useState } from 'react';



function CustomerDashboardPage() {

  type test = {
    _id: string;
    name: string;
  }

    const [data, setData] = useState(Array<test>);

    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-data'); // This API route should be defined in the server
        console.log(response);
        const result = await response.json();
        
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    useEffect(() => {
      // Fetch data when the component mounts
      fetchData();
    }, []);

    return (
      <div>
        <h1>Customer Dashboard</h1>
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CustomerDashboardPage;