import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Facility extends Document {
  name:      string;
  email:     string;
  address:   string;
  units:     [{type: Schema.Types.ObjectId, ref: 'Units'}];
  tenants:   [{type: Schema.Types.ObjectId, ref: 'Tenant'}];
  employees: [{type: Schema.Types.ObjectId, ref: 'Employee'}]
}

const facilitySchema = new Schema<Facility>({
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
    type: String,
    required: true,
  },
  units: [{type: Schema.Types.ObjectId, ref: 'Units'}]
});

export default mongoose.models.Facility || mongoose.model<Facility>('Facility', facilitySchema);