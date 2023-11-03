import mongoose, { Document, Schema } from 'mongoose';

export interface Payments extends Document {
    paymentId:  string
    tenantId:   string
    for:      { type: Schema.Types.ObjectId, ref: 'Rent' } | { type: Schema.Types.ObjectId, ref: 'Retail' }
    type:       string
    date:       Date
}

const paymentSchema = new Schema<Payments>({
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

  export default mongoose.models.Payment || mongoose.model<Payments>('Payment', paymentSchema);
