import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Card extends Document {
    type:           string
    cardNumber:     number
    expirationDate: Date
    security:       number
    zipcode?:       number
}

const cardSchema = new Schema<Card>({
  type: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  security: {
    type: Number,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Card || mongoose.model<Card>('Card', cardSchema);
