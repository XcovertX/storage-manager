import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Tenants extends Document {
  tenantId:           string;
  primaryContact:   { type: Schema.Types.ObjectId, ref: 'Contact' }
  altContact:       { type: Schema.Types.ObjectId, ref: 'Contact' }
  storageUnits:   [ { type: Schema.Types.ObjectId, ref: 'Unit'    } ];
  gateAccess:         string;
  altGateAccess?:     string;
  password:           string;
  startDate:          Date;
  status:             string;
  military?:        { type: Schema.Types.ObjectId, ref: 'Military' };
  property:         { type: Schema.Types.ObjectId, ref: 'Property' };
  paymentHistory: [ { type: Schema.Types.ObjectId, ref: 'Payment'  } ];
  notes:          [ { type: Schema.Types.ObjectId, ref: 'Note'     } ];
  cards:          [ { type: Schema.Types.ObjectId, ref: 'Card'     } ];
  unpaidRent:     [ { type: Schema.Types.ObjectId, ref: 'Rent'     } ];
  autopay:        [ { type: Schema.Types.ObjectId, ref: 'AutoPay'  } ];
  tenantHistory:  [ { type: Schema.Types.ObjectId, ref: 'TenantHistoryLogItem' } ];
}

const tenantSchema = new Schema<Tenants>({
  tenantId: {
    type: String,
    required: true,
    unique:   true
  },
  primaryContact: {
    type: { type: Schema.Types.ObjectId, ref: 'Contact' },
    required: true
  },
  altContact: {
    type: { type: Schema.Types.ObjectId, ref: 'Contact' },
  },
  storageUnits: {
    type: [ { type: Schema.Types.ObjectId, ref: 'Unit' } ],
    required: true,
  },
  gateAccess: {
    type: String,
    required: true,
    unique: true,
  },
  altGateAccess: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  military: {
    type: { type: Schema.Types.ObjectId, ref: 'Military' },
  },
  property: {
    type: { type: Schema.Types.ObjectId, ref: 'Property' },
    required: true
  },
  paymentHistory: {
    type: [ { type: Schema.Types.ObjectId, ref: 'Payment' } ],
    required: true
  },
  notes: {
    type: [ { type: Schema.Types.ObjectId, ref: 'Note' } ],
    required: true
  },
  cards: {
    type: [ { type: Schema.Types.ObjectId, ref: 'Card' } ],
    required: true
  },
  unpaidRent: {
    type: [ { type: Schema.Types.ObjectId, ref: 'Rent' } ],
    required: true
  },
  autopay: {
    type: [ { type: Schema.Types.ObjectId, ref: 'AutoPay' } ],
    required: true
  },
  tenantHistory: {
    type: [ { type: Schema.Types.ObjectId, ref: 'TenantHistoryLogItem' } ],
    required: true
  }
});

export default mongoose.models.Tenant || mongoose.model<Tenants>('Tenant', tenantSchema);
