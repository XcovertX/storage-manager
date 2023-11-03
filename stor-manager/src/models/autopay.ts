import mongoose, { Document, Schema } from 'mongoose';

export interface AutoPay extends Document {
    tenantId:       string
    rent:         { type: Schema.Types.ObjectId, ref: 'Rent' };
    withdrawDate:   Date
    card:         { type: Schema.Types.ObjectId, ref: 'Card' };
    status:         string
}

const autopaySchema = new Schema<AutoPay>({
    tenantId: {
        type: String,
        required: true
    },
    rent: {
        type: { type: Schema.Types.ObjectId, ref: 'Rent' },
        required: true
    },
    withdrawDate: {
        type: Date,
        required: true
    },
    card: {
        type: { type: Schema.Types.ObjectId, ref: 'Card' },
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

export default mongoose.models.AutoPay || mongoose.model<AutoPay>('AutoPay', autopaySchema);


