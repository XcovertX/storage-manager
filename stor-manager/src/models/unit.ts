import mongoose, { Document, Schema } from 'mongoose';
import { UnitHistoryLogItem } from './unit-history';

export interface Unit extends Document {
  type:             string;
  number:           number;
  floor:            number;
  status:           string;
  length:           number;
  width:            number;
  unitHistory:      UnitHistoryLogItem[]
}

const unitSchema = new Schema<Unit>({
  type:   { type: String, required: true },
  floor:  { type: Number, required: true },
  status: { type: String, required: true },
  number: { type: Number, required: true },
  length: { type: Number, required: true },
  width:  { type: Number, required: true },
  unitHistory: [ { type: Schema.Types.ObjectId, ref: 'UnitHistoryLogItem' } ],
});

export default mongoose.models.Unit || mongoose.model<Unit>('Unit', unitSchema);
