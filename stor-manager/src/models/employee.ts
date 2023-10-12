import mongoose, { Document, Schema } from 'mongoose';
import { Address } from './address';

// Define the schema for the Tenant model
export interface Employees extends Document {
  name:     string;
  email:    string;
  address:  Address;
  phone:    number;
  type:     string;
  location: string;
  password: string;
}

const employeeSchema = new Schema<Employees>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: new Schema<Address>({
    street:   String, 
    street2:  String,
    city:     String,
    state:    String,
    zipcode:  Number
  }),
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Employee || mongoose.model<Employees>('Employee', employeeSchema);
