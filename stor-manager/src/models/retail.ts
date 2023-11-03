import mongoose, { Document, Schema } from 'mongoose';

export interface Retail extends Document {
    name:       string
    amount:     number
    quantity:   number
    taxable:    boolean
}

const rentSchema = new Schema<Retail>({
    name:     { type: String,  required: true },
    amount:   { type: Number,  required: true },
    taxable:  { type: Boolean, required: true },
    quantity: { type: Number,  required: true },
  });

  export default mongoose.models.Retail || mongoose.model<Retail>('Retail', rentSchema);