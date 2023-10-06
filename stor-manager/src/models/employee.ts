import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Employee extends Document {
  name: string;
  email: string;
  address: {type: Schema.Types.ObjectId, ref: 'Address'};
  phone: number;
  type: string;
  location: string;
}

const employeeSchema = new Schema<Employee>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: {type: Schema.Types.ObjectId, ref: 'Address'},
    required: true,
  },
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
});

export default mongoose.models.Employee || mongoose.model<Employee>('Tenant', employeeSchema);
