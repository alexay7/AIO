import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  thumbnailSrc: String,
  name: String,
  mileage: String,
  geartype: String,
  dailyprice: Number,
  monthlyprice: Number,
  gas: String,
});

export class Car {
  constructor(
    public id: string,
    thumbnailSrc: string,
    name: string,
    mileage: string,
    geartype: string,
    dailyprice: number,
    monthlyprice: number,
    gas: string,
  ) {}
}
