"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../Commons");
var SeatBelt = /** @class */ (function () {
    function SeatBelt() {
    }
    return SeatBelt;
}());
var BigCar = /** @class */ (function () {
    function BigCar() {
    }
    return BigCar;
}());
console.log(Commons_1.elvis(undefined, 123));
console.log(Commons_1.elvis(null, 123));
console.log(Commons_1.elvis(undefined, 123, null));
console.log(Commons_1.elvis(null, 123, undefined));
console.log("=============================================");
console.log(Commons_1.$$("weightLow"));
console.log(Commons_1.$$c(BigCar));
console.log(Commons_1.$$l(function (car) { return car; }));
console.log(Commons_1.$$l(function (car) { return car.weightHigh; }));
console.log(Commons_1.$$l(function () { }));
console.log("|" + Commons_1.$$l(function (abc) { abc.weightLow; }) + "|");
console.log("|" + Commons_1.$$l2(function (car) { return car.seatInfo.brandName; }) + "|");
console.log("|" + Commons_1.$$l3(function (car) { return car.seatInfos[0].brandName; }) + "|");
//# sourceMappingURL=TestForCommons_v2_.js.map