import mongoose, { Document, Schema } from 'mongoose';

export interface Fee extends Document {
    type:    string
    amount:  number
}

const feeSchema = new Schema<Fee>({
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

export default mongoose.models.Fee || mongoose.model<Fee>('Fee', feeSchema);

