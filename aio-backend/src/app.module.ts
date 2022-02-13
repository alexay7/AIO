import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGOURL,
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: true,
      debug: process.env.NODE_ENV === 'development' ? true : false,
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver
    }),
    ComponentsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
