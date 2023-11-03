import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Auction extends Document {
  soldDate:       Date
  tenantId:       string
  unitNumber:     string
  soldAmount:     number
  buyerContact: { type: Schema.Types.ObjectId, ref: 'Contact' }
}

const auctionSchema = new Schema<Auction>({
  soldDate: {
    type: Date,
    required: true,
  },
  tenantId: {
    type: String,
    required: true,
  },
  unitNumber: {
    type: String,
    required: true
  },
  soldAmount: {
    type: Number,
    required: true,
  },
  buyerContact: {
    type: { type: Schema.Types.ObjectId, ref: 'Contact' }
  },
});

export default mongoose.models.Auction || mongoose.model<Auction>('Auction', auctionSchema);
