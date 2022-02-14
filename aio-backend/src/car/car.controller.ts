import { CarService } from './car.service';
import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('car')
export class CarController {
    constructor(private carService: CarService) { }

    @Post("/create")
    createPost(@Res() res) {
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }

    @Get("/")
    async getCars(@Res() res) {
        const cars = await this.carService.getCars();
        return res.status(HttpStatus.OK).json(cars);
    }

}
