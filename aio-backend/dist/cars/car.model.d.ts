import * as mongoose from 'mongoose';
export declare const CarSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export declare class Car {
    id: string;
    constructor(id: string, thumbnailSrc: string, name: string, mileage: string, geartype: string, dailyprice: number, monthlyprice: number, gas: string);
}
