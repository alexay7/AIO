import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// En este archivo se declaran las rutas que tendrá la api en este caso para el subdominio /
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
