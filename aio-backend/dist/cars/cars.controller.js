"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addProduct(thumb, name, mileage, geartype, dailyprice, monthlyprice, gas) {
        const generatedId = this.productsService.insertProduct(thumb, name, mileage, geartype, dailyprice, monthlyprice, gas);
        return { id: generatedId };
    }
    getAllProducts() {
        return this.productsService.getProducts();
    }
    getProduct(prodId) {
        return this.productsService.getSingleProduct(prodId);
    }
    updateProduct(prodId, prodTitle, prodDesc, prodPrice) {
        return null;
    }
    removeProduct(prodId) {
        this.productsService.deleteProduct(prodId);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('thumb')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('mileage')),
    __param(3, (0, common_1.Body)('geartype')),
    __param(4, (0, common_1.Body)('dailyPrice')),
    __param(5, (0, common_1.Body)('monthlyPrice')),
    __param(6, (0, common_1.Body)('gas')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('description')),
    __param(3, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "removeProduct", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof cars_service_1.ProductsService !== "undefined" && cars_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=cars.controller.js.map