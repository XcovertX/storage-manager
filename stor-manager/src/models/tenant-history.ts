import mongoose, { Document, Schema } from 'mongoose';

export interface TenantHistoryLogItem extends Document {
    type:    string
    unit:    string
    note:    string
    date?:   Date
}

const tenantHistoryLogItemSchema = new Schema<TenantHistoryLogItem>({
  type: { type: String, required: true },
  unit: { type: String, required: true },
  note: { type: String, required: true },
  date: { type: Date },
});

export default mongoose.models.TenantHistoryLogItem || mongoose.model<TenantHistoryLogItem>('TenantHistoryLogItem', tenantHistoryLogItemSchema);
