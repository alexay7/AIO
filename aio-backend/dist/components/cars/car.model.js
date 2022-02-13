"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.CarSchema = void 0;
const mongoose = require("mongoose");
exports.CarSchema = new mongoose.Schema({
    thumbnailSrc: String,
    name: String,
    mileage: String,
    geartype: String,
    dailyprice: Number,
    monthlyprice: Number,
    gas: String,
});
class Car {
    constructor(id, thumbnailSrc, name, mileage, geartype, dailyprice, monthlyprice, gas) {
        this.id = id;
    }
}
exports.Car = Car;
//# sourceMappingURL=car.model.js.map