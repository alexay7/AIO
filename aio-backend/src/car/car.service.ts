import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './interfaces/car.interface';

// En este archivo se definen las funciones relacionadas con la base de datos, las cuales
// Serán accedidas por la api para crear, leer, actualizar y borrar (CRUD) datos.
@Injectable()
export class CarService {
    constructor(@InjectModel("Car") private readonly carModel: Model<Car>) { }

    async getCars(): Promise<Car[]> {
        const cars = await this.carModel.find();
        return cars;
    }
}
