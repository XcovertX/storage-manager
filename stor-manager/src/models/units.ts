import mongoose, { Document, Schema } from 'mongoose';
import { Unit } from './unit';

// Define the schema for the Tenant model
export interface Units extends Document {
    uf5X5:   Unit[];
    gf5X5:   Unit[];
    uf5X10:  Unit[];
    gf5X10:  Unit[];
    uf5X7:   Unit[];
    uf5X12:  Unit[];
    uf10X5:  Unit[];
    gf10X5:  Unit[];
    uf10X7:  Unit[];
    p10X20:  Unit[];
    gf5X20:  Unit[];
    gf10X10: Unit[];
    uf10X10: Unit[];
    gf10X12: Unit[];
    uf10X12: Unit[];
    gf10x15: Unit[];
    uf10X15: Unit[];
    gf10X20: Unit[];
    uf10X20: Unit[];
    du10x25: Unit[];
    du10X30: Unit[];
    du10X35: Unit[];
}

const unitsSchema = new Schema<Units>({
    uf5X5:   [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf5X5:   [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf5X10:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf5X10:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf5X7:   [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf5X12:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf10X5:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf10X5:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf10X7:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    p10X20:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf5X20:  [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf10X10: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf10X10: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf10X12: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf10X12: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf10x15: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf10X15: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    gf10X20: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    uf10X20: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    du10x25: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    du10X30: [{type: Schema.Types.ObjectId, ref: 'Unit'}],
    du10X35: [{type: Schema.Types.ObjectId, ref: 'Unit'}]
});

export default mongoose.models.Units || mongoose.model<Units>('Units', unitsSchema);
