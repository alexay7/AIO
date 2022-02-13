import { CarsService } from './cars.service';
/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CarSchema } from "./car.model";
import { CarsResolver } from './cars.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Car", schema: CarSchema }])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService]
})
export class CarsModule { }
