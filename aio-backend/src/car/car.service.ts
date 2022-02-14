import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarService {
    constructor(@InjectModel("Car") private readonly carModel: Model<Car>) { }

    async getCars(): Promise<Car[]> {
        const cars = await this.carModel.find();
        return cars;
    }
}
