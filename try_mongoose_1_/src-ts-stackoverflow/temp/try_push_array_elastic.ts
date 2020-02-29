import {$array} from "../common/Commons";

const arr1 = (()=>{
    const arrTemp = [];
    for (let i = 0; i < 10; i++) {
        arrTemp.push(i);
    }
    return arrTemp;
})();
console.log("created arr1");
const arr2 = (()=>{
    const arrTemp = [];
    for (let i = 0; i < 20; i++) {
        arrTemp.push(i);
    }
    return arrTemp;
})();
console.log("created arr2");
const arr3 = [1,2,3];
const x1 = $array<number>(arr1);
const x2 = Object.getPrototypeOf($array<number>(arr1));
console.log($array<number>(arr1));
console.log(Object.getPrototypeOf($array<number>(arr1)));
const x = $array<number>(arr1)
    .pushAll(arr2)
    .pushAll(arr3).array;
console.log(x);
console.log(arr1);

