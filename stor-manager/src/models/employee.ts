import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Employees extends Document {
  contact:  { type: Schema.Types.ObjectId, ref: 'Contact' };
  address:  { type: Schema.Types.ObjectId, ref: 'Address' };
  type:       string;
  location:   string;
  password:   string;
}

const employeeSchema = new Schema<Employees>({
  contact: {
    type: { type: Schema.Types.ObjectId, ref: 'Contact' },
    required: true,
  },
  address: {
    type: { type: Schema.Types.ObjectId, ref: 'Address' },
    required: true,
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
