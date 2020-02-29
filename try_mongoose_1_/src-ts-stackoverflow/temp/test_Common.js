"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../common/Commons");
var Car = /** @class */ (function () {
    function Car() {
        this.defauut = 100;
        this.func = function (v) { return v * 2; };
    }
    return Car;
}());
var car1 = Commons_1.$create(Car, {
    fullName: "a car",
    cost: 50,
} /*force use Partial !*/);
console.log(car1);
console.log(JSON.stringify(car1, null, 4));
console.log(car1.func(1));
var car2 = Commons_1.$create(Car, {});
//======================================================
/*class House{
    fullName:string;
    width:number;
    heigth:number;
}
namespace House{
    export interface Excl{height}
}
const house1 = $buildNewExcluded(House,{});*/
