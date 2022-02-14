import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/components.module';

// En este archivo se importan todos los componentes de la app
// Lo normal sería ponerlos de uno en uno en el array imports pero con
// El "components.module.ts" se ahorra trabajo importando todo en uno
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
