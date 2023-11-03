import mongoose, { Document, Schema } from 'mongoose';

export interface Discount extends Document {
    type:    string
    percent: number
}

const discountSchema = new Schema<Discount>({
    type: {
        type: String,
        required: true
    },
    percent: {
        type: Number,
        required: true
    }
});

export default mongoose.models.Discount || mongoose.model<Discount>('Discount', discountSchema);

