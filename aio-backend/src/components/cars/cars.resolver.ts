// En este archivo van las funciones a las que podrá acceder graphQL

import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CarInput } from './input/car.input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) { }

  @Query(() => [CreateCarDto])
  async cars() {
    return this.carsService.findAll();
  }

  @Mutation(() => CreateCarDto)
  async createCar(@Args('input') input: CarInput) {
    return this.carsService.create(input);
  }

}
