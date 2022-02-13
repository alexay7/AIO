import { CarsService } from './cars.service';
export declare class CarsResolver {
    private CarsService;
    constructor(CarsService: CarsService);
    cars(): Promise<string>;
}
