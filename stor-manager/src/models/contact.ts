import mongoose, { Document, Schema } from 'mongoose';

export interface Contact extends Document {
    firstName:  string
    lastName:   string
    phone:      string
    altPhone:   string
    address:   {type: Schema.Types.ObjectId, ref: 'Address'}
    email:      string
}

const contactSchema = new Schema<Contact>({
firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  altPhone: {
    type: String,
    required: true,
  },
  address: {
    type: { type: Schema.Types.ObjectId, ref: 'Address' },
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Contact || mongoose.model<Contact>('Contact', contactSchema);
