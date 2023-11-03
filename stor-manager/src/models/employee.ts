import mongoose, { Document, Schema } from 'mongoose';
import { Contact } from './contact';
import { Address } from './address';

// Define the schema for the Tenant model
export interface Employee extends Document {
  contact:  Contact;
  address:  Address;
  type:     string;
  location: string;
  password: string;
}

const employeeSchema = new Schema<Employee>({
  contact:  { type: Schema.Types.ObjectId, ref: 'Contact' },
  address:  { type: Schema.Types.ObjectId, ref: 'Address' },
  type:     { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.Employee || mongoose.model<Employee>('Employee', employeeSchema);
