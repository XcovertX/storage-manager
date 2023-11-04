import mongoose, { Document, Schema } from 'mongoose';

export interface Counter extends Document {
    type:    string
    count:   number
}

const counterSchema = new Schema<Counter>({
    type:   { type: String, required: true },
    count:  { type: Number, required: true }
});

export default mongoose.models.Counter || mongoose.model<Counter>('Counter', counterSchema);

