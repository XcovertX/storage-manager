import mongoose, { Document, Schema } from 'mongoose';
import { Rent } from './rent';
import { Card } from './card';

export interface AutoPay extends Document {
    tenantId:     string
    rent:         Rent;
    withdrawDate: Date
    card:         Card;
    status:       string
}

const autopaySchema = new Schema<AutoPay>({
    tenantId:       { type: String, required: true              },
    rent:           { type: Schema.Types.ObjectId, ref: 'Rent'  },
    withdrawDate:   { type: Date, required: true                },
    card:           { type: Schema.Types.ObjectId, ref: 'Card'  },
    status:         { type: String, required: true              },
});

export default mongoose.models.AutoPay || mongoose.model<AutoPay>('AutoPay', autopaySchema);


