import {schemaFromTypeWithExclude, schemaFromTypeWithExcludeThenInclude} from "../CommonMongoose";
import {$buildExclude, $$, nameofFactory} from "../Commons";

class ATest{
    aPropx;
}
const theName1 = $$<ATest>("aPropx");
const theName1b = $$<{ATest}>("ATest");
// const theName2 = nameof2<ATest>("aPropx");

const theName9 = $$<ATest>("aPropx");
const theName9b = $$<{ATest}>("ATest");

const theName3 = nameofFactory<ATest>();
console.log(theName3);

class Company{
    fullName:string;
    age:number;
    isGood:boolean;
    strength:number;
}

//region try `schemaFromTypeWithExclude`
const x1 = schemaFromTypeWithExclude<Company,{"isGood"/*,"age"*/}>({
    age: 0,
    fullName: "",
    strength: 123
});
const x2 = schemaFromTypeWithExcludeThenInclude<Company,{"isGood"/*,"age"*/},{"isBad"}>({
    isBad: undefined,
    age: 0,
    fullName: "",
    strength: 123
});
// prop name (not string) is also POSSIBLE:
const x1b = schemaFromTypeWithExclude<Company,{isGood,age,strength:any}>({
    fullName: ""
});
//endregion

class Car{
    fullName;
    age;
    speed;
}
const car1 = $buildExclude<Car,{fullName}>({age: undefined, speed: undefined});
