import express, { Express } from 'express';
import mongoose, {ConnectOptions} from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRouter from '../routes/auth';
import dashboardRouter from '../routes/dashboard';

// Create an Express application
const app: Express = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to your MongoDB database here
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
} as ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

// Start the Express server
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
