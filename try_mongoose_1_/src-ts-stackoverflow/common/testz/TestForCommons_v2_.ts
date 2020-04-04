import {$$, $$c, $$l, $$l2, $$l3, elvis} from "../Commons";

class SeatBelt{
    brandName:number;
}
class BigCar{
    weightHigh:number;
    weightLow:string;
    seatInfo:SeatBelt;
    seatInfos:SeatBelt[];
}

console.log(elvis(undefined,123));
console.log(elvis(null,123));
console.log(elvis(undefined,123,null));
console.log(elvis(null,123,undefined));
console.log("=============================================");
console.log($$<BigCar>("weightLow"));
console.log($$c(BigCar));
console.log($$l((car:BigCar)=>car));
console.log($$l((car:BigCar)=>car.weightHigh));
console.log($$l(function () {}));
console.log("|"+$$l(function (abc:BigCar) {abc.weightLow})+"|");
console.log("|"+$$l2<BigCar>(car=>car.seatInfo.brandName)+"|");
console.log("|"+$$l3<BigCar>(car=>car.seatInfos[0].brandName)+"|");
