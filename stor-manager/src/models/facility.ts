import mongoose, { Document, Schema } from 'mongoose';
import { Address } from './address';
import { Tenant } from './tenant';
import { Employee } from './employee';
import { Inventory } from './inventory';
import { Unit } from './unit';

export interface Facilities extends Document {
  name:       string;
  email:      string;
  address:    Address;
  units:      Unit[];
  tenants:    Tenant[];
  employees:  Employee[];
  inventory:  Inventory;
}

const facilitySchema = new Schema<Facilities>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address:      { type: Schema.Types.ObjectId, ref: 'Address'   },
  units:      [ { type: Schema.Types.ObjectId, ref: 'Unit'      } ],
  tenants:    [ { type: Schema.Types.ObjectId, ref: 'Tenant'    } ],
  employees:  [ { type: Schema.Types.ObjectId, ref: 'Employee'  } ],
  inventory:  [ { type: Schema.Types.ObjectId, ref: 'Inventory' } ],

});

export default mongoose.models.Facility || mongoose.model<Facilities>('Facility', facilitySchema);
