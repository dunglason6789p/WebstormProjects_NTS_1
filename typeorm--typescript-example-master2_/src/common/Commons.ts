export type AllPropName<T> = {
    [P in keyof T]: any;
};
export type SomePropName<T> = {
    [P in keyof T]?: any;
};
export const nameofFactory = <T>() => (name: keyof T) => name;




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
export function $createExclude<T,Exclu extends SomePropName<T>>(tipe:{new():T}, v:Omit<AllPropName<T>,keyof Exclu>):T{
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
    static SKIP = "NTS::SKIP"
    private _log:any;
    set log(value: any) {
        console.log("================================================================================================================");
        if(value!=MyLogger.SKIP) {
            console.log(value);
        }
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



/**access the given property of the object, set default value if null, then return the value.*/
/*export function $a<T,P extends T[Extract<keyof T, string>]>(obj:T,prop:Extract<keyof T,string>,defau:P):P {
    if(obj[prop]==null){
        obj[prop] = defau
    }
    return obj[prop] as unknown as P
}*/
/*=======EXAMPLE:========
class Wheel{
    constructor(weight: number, brand: string) {
        this.weight = weight;
        this.brand = brand;
    }
    weight:number;
    brand:string;
}
class Seat{
    constructor(size: number) {
        this.size = size;
    }
    size:number
}
class Car{
    readonly seatList:Seat[]=null;
    wheelList:Wheel[]=null;
}
const car1 = new Car();
$a(car1,"seatList",[] as Seat[]).push(new Seat(123));*/


/**access the given property (having type of array/list) of the object, set default value if null, then return the value.*/
/*export function $al<T>(obj:T,prop:Extract<keyof T,string>):any {
    if(obj[prop]==null){
        // @ts-ignore
        obj[prop] = []
    }
    return obj[prop]
}*/



/**Access the given property of the object, set default value if that property is currently null, then return the value of that property.<br>
 * It is OK to use null as value of key-value pair in `defau` e.g: {prop1:null}, when so, nothing will change, the function just return
 * the property!*/
export function $a<T,P extends Partial<T>>(obj:T, defau:P):P[keyof P]{
    const key = Object.keys(defau)[0];
    if(obj[key]==null){
        obj[key] = defau[key]//OK even if `defau[key]==null`.
    }
    return obj[key]
}
/* //========================EXAMPLE=============================
class Wheel{
    constructor(weight: number, brand: string) {
        this.weight = weight;
        this.brand = brand;
    }
    weight:number;
    brand:string;
}
class Seat{
    constructor(cost: number) {
        this.cost = cost;
    }
    cost:number
}
class Car{
    readonly seatList:Seat[]=null;
    wheelList:Wheel[]=null;
}
const car1 = new Car();
$a(car1,{seatList:[new Seat(2),new Seat(3)]}).push(new Seat(4));
for(let seat of car1.seatList){
    console.log(seat.cost);
}*/



