// En este archivo van las funciones internas que contactan con la base de datos
// Las consultas que se hagan a GraphQL llamaran a estas funciones para entregar los datos

import { CreateCarDto } from './dto/create-car.dto';
import { Model } from 'mongoose';
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Repository } from "typeorm";
import { Car } from './interfaces/car.interface';
import { CarInput } from './input/car.input';

@Injectable()
export class CarsService {
    constructor(@InjectModel('Car') private carModel: Model<Car>) { }

    async findAll(): Promise<Car[]> {
        return await this.carModel.find().exec();
    }

    async create(newCarData: CarInput): Promise<Car> {
        const newCar = new this.carModel(newCarData);
        return await newCar.save();
    }
}