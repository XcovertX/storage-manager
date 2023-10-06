import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Tenants extends Document {
  name:          string;
  email:         string;
  phone:         number;
  address:      {type: Schema.Types.ObjectId, ref: 'Address'}
  storageUnit: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
  gateAccess1:   number;
  gateAccess2?:  number;
  password:      string;
  moveInDate:    Date;
  moveOutDate?:  Date;
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
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: {type: Schema.Types.ObjectId, ref: 'Address'},
    required: true,
  },
  storageUnit: {
    type: [{type: Schema.Types.ObjectId, ref: 'Address'}],
    required: true,
  },
  gateAccess1: {
    type: Number,
    required: true,
    unique: true,
  },
  gateAccess2: {
    type: Number,
    unique: true,
  },
  password: {
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

export default mongoose.models.Tenant || mongoose.model<Tenants>('Tenant', tenantSchema);
