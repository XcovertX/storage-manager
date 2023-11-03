import mongoose, { Document, Schema } from 'mongoose';
import { Retail } from './retail';
import { Rent } from './rent';

export interface Payment extends Document {
    paymentId:  string
    tenantId:   string
    for:        Rent | Retail
    type:       string
    date:       Date
}

const paymentSchema = new Schema<Payment>({
    paymentId: {
      type: String,
      required: true,
      unique:   true
    },
    tenantId: {
        type: String,
        required: true
    },
    for: {
      type: Schema.Types.Mixed,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  });

  export default mongoose.models.Payment || mongoose.model<Payment>('Payment', paymentSchema);
