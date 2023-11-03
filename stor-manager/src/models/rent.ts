import mongoose, { Document, Schema } from 'mongoose';
import { Discount } from './discount';
import { Fee } from './Fee';

export interface Rent extends Document {
    tenantId:      string
    dueDay:        Date
    from:          Date
    to:            Date
    amount:        number
    discount?:     Discount[]
    lateFees?:     Fee[]
}

const rentSchema = new Schema<Rent>({
    tenantId: {
      type: String,
      required: true
    },
    dueDay: {
        type: Date,
        required: true
    },
    from: {
        type: Date,
        required: true
      },
    to: {
        type: Date,
        required: true
      },
    amount: {
      type: Number,
      required: true
    },
    discount: { type: Schema.Types.ObjectId, ref: 'Discount' },
    lateFees: { type: Schema.Types.ObjectId, ref: 'Fee' },
  });

  export default mongoose.models.Rent || mongoose.model<Rent>('Rent', rentSchema);
