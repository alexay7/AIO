import { Controller, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('car')
export class CarController {

    @Post("/create")
    createPost(@Res() res) {
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }

}
