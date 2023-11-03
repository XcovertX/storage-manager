import mongoose, { Document, Schema } from 'mongoose';

export interface Notes extends Document {
    employeeId:   string
    tenantId:     string
    date:         Date
    note:         string
}

const noteSchema = new Schema<Notes>({
    employeeId: {
      type: String,
      required: true
    },
    tenantId: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    note: {
      type: String,
      required: true
    }
  });

  export default mongoose.models.Note || mongoose.model<Notes>('Note', noteSchema);
