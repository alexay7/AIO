import { Document } from "mongoose";

// Aquí se declara el modelo por segunda vez, para typescript
export interface Car extends Document {
    readonly thumbnailSrc: string;
    readonly name: string;
    readonly mileage: string;
    readonly geartype: string;
    readonly dailyprice: number;
    readonly monthlyprice: number;
    readonly gas: string;
} 