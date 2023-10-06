import { Router } from 'express';
import YourMongoDBModel from '../../models/tenant'; // Replace with your actual MongoDB model

const apiRouter = Router();

// Define an API route to retrieve data
apiRouter.get('/get-data', async (req, res) => {
    console.log('hereasdfas')
  try {
    // Fetch data from MongoDB using your model
    const data = await YourMongoDBModel.find(); // Replace with your actual MongoDB model and query

    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default apiRouter;