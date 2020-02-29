import {Document, Model, SchemaDefinition} from "mongoose";
export type AllPropName<T> = {
    [P in keyof T]: any;
};
export type SomePropName<T> = {
    [P in keyof T]?: any;
};
export function schemaFromType<T>(value:AllPropName<T>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
/**exclude props in Exclu.*/
export function schemaFromTypeWithExclude<T,Exclu extends SomePropName<T>>(value:Omit<AllPropName<T>,keyof Exclu>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
/**exclude props in Exclu, then include props in Extraa.*/
export function schemaFromTypeWithExcludeThenInclude<T,Exclu extends SomePropName<T>,Extraa>(value:Omit<AllPropName<T>,keyof Exclu> & Extraa):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
/**optional version of `schemaFromType`*/
export function schemaFromTypePartial<T>(value:SomePropName<T>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}


export const nameof = <T>(p: Extract<keyof T, string>): string => p;
export const $$ = <T>(p: Extract<keyof T, string>): string => p;
//export const nameof2 = <T>(name: Extract<T, string>): string => name;

/* class decorator: It must implement static methods that come from some interface T (in T, the method is NOT static!).
* Example: @mustImpStatMethFrom<ComparableStatic<TableCell>>()*/
export function mustImpStatMethFrom<T>() {
    return (something: T) => {}
}
/*export function mustImpStatMethFrom2<T>():(T)=>void {
    return null;
}*/

export interface ModelInterface {
}
export abstract class Buildable{
    static $build(v:any):any{}
    static $buildPartial(v:any):any{}
}
export function $build<T>(v:T){return v}
export function $buildPartial<T>(v:Partial<T>){return v}
export function $buildRequired<T>(v:Required<T>){return v}
export function $buildExclude<T,Exclu extends SomePropName<T>>(v:Omit<T,keyof Exclu>){return v}

export class MyLogger{
    private _log:any;
    set log(value: any) {
        console.log(value);
    }
}


class ATest{
    aPropx;
}
const theName1 = nameof<ATest>("aPropx");
const theName1b = nameof<{ATest}>("ATest");
// const theName2 = nameof2<ATest>("aPropx");

const theName9 = $$<ATest>("aPropx");
const theName9b = $$<{ATest}>("ATest");

const nameofFactory = <T>() => (name: keyof T) => name;
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
