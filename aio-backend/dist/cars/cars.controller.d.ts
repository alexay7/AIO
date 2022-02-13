import { ProductsService } from './cars.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(thumb: string, name: string, mileage: string, geartype: string, dailyprice: number, monthlyprice: number, gas: string): {
        id: any;
    };
    getAllProducts(): any;
    getProduct(prodId: string): any;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    removeProduct(prodId: string): any;
}
