import mongoose, { Document, Schema } from 'mongoose';
import { Contact } from './contact';
import { Unit } from './unit';
import { Military } from './military';
import { Facilities } from './facility';
import { Payment } from './payment';
import { Note } from './note';
import { Card } from './card';
import { Rent } from './rent';
import { AutoPay } from './autopay';
import { TenantHistoryLogItem } from './tenant-history';

// Define the schema for the Tenant model
export interface Tenant extends Document {
  tenantId:         string
  primaryContact:   Contact
  altContact:       Contact
  storageUnits:     Unit[]
  gateAccess:       string
  altGateAccess?:   string
  password:         string
  startDate:        Date
  status:           string
  military?:        Military
  facility:         Facilities
  paymentHistory:   Payment[]
  notes:            Note[]
  cards:            Card[]
  unpaidRent:       Rent[]
  autopay:          AutoPay[]
  tenantHistory:    TenantHistoryLogItem[]
}

const tenantSchema = new Schema<Tenant>({
  tenantId:         { type: String, unique: true },
  primaryContact:   { type: Schema.Types.ObjectId, ref: 'Contact' },
  altContact:       { type: Schema.Types.ObjectId, ref: 'Contact' },
  storageUnits:   [ { type: Schema.Types.ObjectId, ref: 'Unit' } ],
  gateAccess:       { type: String, unique: true },
  altGateAccess:    { type: String, unique: true },
  password:         { type: String },
  startDate:        { type: Date },
  status:           { type: String },
  military:         { type: Schema.Types.ObjectId, ref: 'Military' },
  facility:         { type: Schema.Types.ObjectId, ref: 'Property' },
  paymentHistory: [ { type: Schema.Types.ObjectId, ref: 'Payment' } ],
  notes:          [ { type: Schema.Types.ObjectId, ref: 'Note' } ],
  cards:          [ { type: Schema.Types.ObjectId, ref: 'Card' } ],
  unpaidRent:     [ { type: Schema.Types.ObjectId, ref: 'Rent' } ],
  autopay:        [ { type: Schema.Types.ObjectId, ref: 'AutoPay' } ],
  tenantHistory:  [ { type: Schema.Types.ObjectId, ref: 'TenantHistoryLogItem' } ],
});

export default mongoose.models.Tenant || mongoose.model<Tenant>('Tenant', tenantSchema);