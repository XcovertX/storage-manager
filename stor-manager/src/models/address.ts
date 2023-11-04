import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Address extends Document {
  street:     string;
  altStreet?: string;
  city:       string;
  state:      string;
  zipcode:    string;
}

const addressSchema = new Schema<Address>({
  street:     { type: String },
  altStreet:  { type: String },
  city:       { type: String },
  state:      { type: String },
  zipcode:    { type: String },
});

export default mongoose.models.Address || mongoose.model<Address>('Address', addressSchema);
