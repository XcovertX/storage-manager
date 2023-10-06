import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Facilities extends Document {
  yelm:     {type: Schema.Types.ObjectId, ref: 'Facility'};
  puyallup: {type: Schema.Types.ObjectId, ref: 'Facility'};
  bellevue: {type: Schema.Types.ObjectId, ref: 'Facility'};
  renton:   {type: Schema.Types.ObjectId, ref: 'Facility'};
}

const facilitiesSchema = new Schema<Facilities>({
  yelm:     {type: Schema.Types.ObjectId, ref: 'Facility'},
  puyallup: {type: Schema.Types.ObjectId, ref: 'Facility'},
  bellevue: {type: Schema.Types.ObjectId, ref: 'Facility'},
  renton:   {type: Schema.Types.ObjectId, ref: 'Facility'},
});

export default mongoose.models.Facilities || mongoose.model<Facilities>('Facilities', facilitiesSchema);
