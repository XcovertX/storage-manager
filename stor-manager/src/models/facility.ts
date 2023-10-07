import mongoose, { Document, Schema } from 'mongoose';
import { Address } from './address';



export interface Facilities extends Document {
  name:        string;
  email:       string;
  address:     Address;
  units:      {type: Schema.Types.ObjectId, ref: 'Units'};
  tenants:   [{type: Schema.Types.ObjectId, ref: 'Tenant'}];
  employees: [{type: Schema.Types.ObjectId, ref: 'Employee'}];
  inventory:  {type: Schema.Types.ObjectId, ref: 'Inventory'};
}

const facilitySchema = new Schema<Facilities>({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  address: new Schema<Address>({
      street: String, 
      street2:  String,
      city:     String,
      state:    String,
      zipcode:  Number
    }),
  units: {
    units: [{type: Schema.Types.ObjectId, ref: 'Units'}],
    // required: true
  },
  tenants: {
    type: [{type: Schema.Types.ObjectId, ref: 'Tenant'}],
    // required: true
  },
  employees: {
    type: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    // required: true
  },
  inventory: {
    type: [{type: Schema.Types.ObjectId, ref: 'Inventory'}],
    // required: true
  }
});

export default mongoose.models.Facility || mongoose.model<Facilities>('Facility', facilitySchema);
