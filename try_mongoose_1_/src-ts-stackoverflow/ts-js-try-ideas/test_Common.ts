import {$create} from "../common/Commons";

class Car{
    fullName:string;
    cost:number;
    weight?:number;
    isNew:boolean;
    defauut = 100;
    func = (v)=>{return v*2}
}
const car1 = $create(Car,{
    fullName:"a car",
    cost:50,
    //isNew:true
} as Car/*force use Partial !*/);
console.log(car1);
console.log(JSON.stringify(car1,null,4));

console.log(car1.func(1));

const car2 = $create<Car>(Car,{
}as Car);

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
