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
/**NTS: Instantiate new object from given class and given object.*/
export function $create<T>(tipe:{new():T}, v:T):T{
    return Object.assign(new tipe(),v);
}
/**NTS: Instantiate new object from given class and given object,
 * then execute the callback, then return this object.*/
export function $createThenExec<T>(tipe:{new():T}, obj:T, callback:(thisObj:T)=>void):T {
    const newObj = Object.assign(new tipe(),obj);
    callback(newObj);
    return newObj;
}
/*export function $buildNewExcluded<T extends {Excl}>(tipe:{new():T},v:Omit<T,keyof T["Excl"]>):T{
    return Object.assign(new tipe(),v);
}*/

export class MyLogger{
    private _log:any;
    set log(value: any) {
        console.log("[TRACE]log:");
        console.log(value);
    }
}

class ArrayExtended<T> extends Array<T> {
    private constructor(items?: Array<T>) {
        super(...items)
    }
    private _array:T[];
    get array(): T[] {
        return this._array;
    }
    static create<T>(arr?:T[]): ArrayExtended<T> {
        const obj:ArrayExtended<T> = Object.create(ArrayExtended.prototype);
        obj._array = arr ?? [];
        return obj;
    }
    /**NTS:  <b>MODIFY</b> the internal array `_array` by adding all items from argument array `arr` using `for` loop
     * to avoid `Javascript Heap out of memory` Error.*/
    pushAll(arr:T[]){
        for(let item of arr){
            this._array.push(item);
        }
        return this;
    }
}
/**NTS:Create a ArrayExtended wrapper for this array.*/
export function $array<T>(arr:T[]) {
    return ArrayExtended.create<T>(arr);
}
class ObjectExtended<T>{
    constructor(obj: T) {
        this._obj = obj;
    }
    get obj(): T {
        return this._obj;
    }
    private readonly _obj:T;
    exec(callback:(v:T)=>void):ObjectExtended<T>{
        callback(this._obj);
        return this;
    }
}
export function $obj<T>(obj:T) {
    return new ObjectExtended<T>(obj);
}
/**NTS: Execute the function on this object, then return this object*/
export function $exec<T>(obj:T,f:Function,...argArray):T {
    f.apply(obj,argArray);
    return obj;
}
/**NTS: Execute the callback, then return this object. Example: `const x = $execCB(p1,(v)=>{v.say()});` <-- `p1` is passed into `v`.*/
export function $execCB<T>(obj:T,callback:(thisObj:T)=>void):T {
    callback(obj);
    return obj;
}

export function $getKeys(obj:any,isClass=false){
    try{
        if(isClass){obj = new obj();}
        return Object.keys(obj);
    }catch (err) {
        console.log(err);
        return [];
    }
}
export function $logKeyValue(obj:any,stringify=false){
    try{
        console.log("[INFO]object key-value pairs:");
        console.log("{");
        for(let key of Object.keys(obj)){
            //.map(key => obj[key]);
            console.log(`    "${key}":${stringify?JSON.stringify(obj[key]):obj[key]}`);
        }
        console.log("}");
    }catch (err) {
        console.log(err);
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
