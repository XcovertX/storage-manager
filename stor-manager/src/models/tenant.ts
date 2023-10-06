import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Tenants extends Document {
  name: string;
  email: string;
  storageUnit: string;
  moveInDate: Date;
  moveOutDate?: Date;
}

const tenantSchema = new Schema<Tenants>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  storageUnit: {
    type: String,
    required: true,
  },
  moveInDate: {
    type: Date,
    required: true,
  },
  moveOutDate: {
    type: Date,
  },
});

// Create the Tenant model using the schema
export default mongoose.models.Tenant || mongoose.model<Tenants>('Tenant', tenantSchema);
