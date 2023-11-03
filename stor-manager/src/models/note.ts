import mongoose, { Document, Schema } from 'mongoose';

export interface Note extends Document {
    employeeId:   string
    tenantId:     string
    date:         Date
    note:         string
}

const noteSchema = new Schema<Note>({
    employeeId: { type: String, required: true },
    tenantId:   { type: String, required: true },
    date:       { type: Date,   required: true },
    note:       { type: String, required: true }
  });

  export default mongoose.models.Note || mongoose.model<Note>('Note', noteSchema);
