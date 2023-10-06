import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Inventory extends Document {
  ezLock: number;
  smBox: number;
  mdBox: number;
  lgBox: number;
  xlBox: number;
  wrappingPaper5: number;
  wrappingPaper10: number;
  tapeHD3M: number;
  clearTapeBonusPack: number;
}

const inventorySchema = new Schema<Inventory>({
  ezLock: {
    type: Number,
    required: true,
  },
  smBox: {
    type: Number,
    required: true,
  },
  mdBox: {
    type: Number,
    required: true,
  },
  lgBox: {
    type: Number,
    required: true,
  },
  xlBox: {
    type: Number,
    required: true,
  },
  wrappingPaper5: {
    type: Number,
    required: true,
  },
  wrappingPaper10: {
    type: Number,
    required: true,
  },
  tapeHD3M: {
    type: Number,
    required: true,
  },
  clearTapeBonusPack: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Inventory || mongoose.model<Inventory>('Inventory', inventorySchema);
