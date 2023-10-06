import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Unit extends Document {
  type: string;
  number: number;
  floor:  number;
  length: number;
  width:  number;
  currentTenant: {type: Schema.Types.ObjectId, ref: 'Tenant'};
  pastTenants:  [{type: Schema.Types.ObjectId, ref: 'Tenant'}];
}

const unitSchema = new Schema<Unit>({
  type: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  currentTenant: {
    type: Schema.Types.ObjectId, 
    ref: 'Tenant'
  },
  pastTenants:  [{
    type: Schema.Types.ObjectId, 
    ref: 'Tenant'
  }]
});

// Create the Tenant model using the schema
export default mongoose.models.Unit || mongoose.model<Unit>('Unit', unitSchema);