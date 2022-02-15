import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';

// En este archivo se unen todos los componentes de la app
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGOURL,
    ),
    HttpModule,
    CarModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
