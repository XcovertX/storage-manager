import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Inventory extends Document {
  ezLock:             string;
  smBox:              string;
  mdBox:              string;
  lgBox:              string;
  xlBox:              string;
  wrappingPaper5:     string;
  wrappingPaper10:    string;
  tapeHD3M:           string;
  clearTapeBonusPack: string;
}

const inventorySchema = new Schema<Inventory>({
  ezLock: {
    type: String,
    required: true,
  },
  smBox: {
    type: String,
    required: true,
  },
  mdBox: {
    type: String,
    required: true,
  },
  lgBox: {
    type: String,
    required: true,
  },
  xlBox: {
    type: String,
    required: true,
  },
  wrappingPaper5: {
    type: String,
    required: true,
  },
  wrappingPaper10: {
    type: String,
    required: true,
  },
  tapeHD3M: {
    type: String,
    required: true,
  },
  clearTapeBonusPack: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Inventory || mongoose.model<Inventory>('Inventory', inventorySchema);
