import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface UnitHistoryLogItem extends Document {
    type:        string
    tenantId:    string
    fromDate:    Date
    toDate?:     Date
}

const unitHistoryLogItemSchema = new Schema<UnitHistoryLogItem>({
  type:     { type: String, required: true },
  tenantId: { type: String, required: true },
  fromDate: { type: Date,   required: true },
  toDate:   { type: Date },
});

export default mongoose.models.UnitHistoryLogItem || mongoose.model<UnitHistoryLogItem>('UnitHistoryLogItem', unitHistoryLogItemSchema);
