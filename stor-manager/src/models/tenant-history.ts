import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface TenantHistoryLogItem extends Document {
    type:    string
    unit:    string
    note:    string
    date?:   Date
}

const tenantHistoryLogItemSchema = new Schema<TenantHistoryLogItem>({
  type: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
});

export default mongoose.models.TenantHistoryLogItem || mongoose.model<TenantHistoryLogItem>('TenantHistoryLogItem', tenantHistoryLogItemSchema);
