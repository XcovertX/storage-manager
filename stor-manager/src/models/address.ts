import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Address extends Document {
  street:   string;
  street2:  string;
  city:     string;
  state:    string;
  zipcode:  number;
}

const addressSchema = new Schema<Address>({
  street: {
    type: String,
    required: true,
  },
  street2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Address || mongoose.model<Address>('Address', addressSchema);
