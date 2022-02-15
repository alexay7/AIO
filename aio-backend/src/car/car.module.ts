import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarSchema } from './schemas/car.schema';

// En este archivo se unen todas las características necesarias para hacer funcionar lo relativo a "car"
// El esquema de la base de datos, las rutas de la api y las conexiones con la base de datos
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
  controllers: [CarController],
  providers: [CarService]
})

export class CarModule { }
