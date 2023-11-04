import mongoose, { Document, Schema } from 'mongoose';
import { Address } from './address';

export interface Contact extends Document {
    firstName:  string
    lastName:   string
    phone:      string
    altPhone?:  string
    address:    Address
    email:      string
}

const contactSchema = new Schema<Contact>({
firstName:  { type: String, required: true },
  lastName: { type: String, required: true },
  phone:    { type: String, required: true },
  altPhone: { type: String },
  address:  { type: Schema.Types.ObjectId, ref: 'Address' },
  email: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model<Contact>('Contact', contactSchema);
