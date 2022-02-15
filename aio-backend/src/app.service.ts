import { Injectable } from '@nestjs/common';

// En este archivo se definen las funciones relacionadas con la base de datos, las cuales
// Serán accedidas por la api para crear, leer, actualizar y borrar (CRUD) datos.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
