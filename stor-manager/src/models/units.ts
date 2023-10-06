import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for the Tenant model
export interface Units extends Document {
    uf5X5:   [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf5X5:   [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf5X10:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf5X10:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf5X7:   [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf5X12:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf10X5:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf10X5:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf10X7:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    p10X20:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf5X20:  [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf10X10: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf10X10: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf10X12: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf10X12: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf10x15: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf10X15: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    gf10X20: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    uf10X20: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    du10x25: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    du10X30: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
    du10X35: [{type: Schema.Types.ObjectId, ref: 'Unit'}];
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
