import * as mongoose from 'mongoose';

// Aquí se declara el modelo por primera vez, para mongoDB
export const CarSchema = new mongoose.Schema({
    thumbnailSrc: String,
    name: String,
    mileage: String,
    geartype: String,
    dailyprice: Number,
    monthlyprice: Number,
    gas: String,
});