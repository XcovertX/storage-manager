import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Military extends Document {
  commandingOfficer:    string;
  dutyStation:          string;
}

const militarySchema = new Schema<Military>({
  commandingOfficer:  { type: String, required: true },
  dutyStation:        { type: String, required: true },
});

export default mongoose.models.Military || mongoose.model<Military>('Military', militarySchema);
