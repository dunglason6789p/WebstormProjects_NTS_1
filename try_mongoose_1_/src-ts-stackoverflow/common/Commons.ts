import {_1Space} from "./Const";

export type AllPropName<T> = {
    [P in keyof T]: any;
};
export type SomePropName<T> = {
    [P in keyof T]?: any;
};


/**Type of given property of given class. VD: PropType<ABC,"xyz">*/
export type PropType<T,P extends keyof T> = T[P]
/**Type of first item of given array type. VD: ArrayItemType<number[]>*/
export type ArrayItemType<A extends any[]> = A[0]
/**Type of item in array, only if the given type arg (A) is truly an array. If not, then the type is never. */
export type ArrayItemTypeOrNever<A> = A extends (infer _ArrayItemType_)[]? _ArrayItemType_ : never
/**Type of item in array, only if the given type arg (A) is truly an array. If not, then the type is the type of A. */
export type ArrayItemTypeOrItself<A> = A extends (infer _ArrayItemType_)[]? _ArrayItemType_ : A
/**If A is array then return `keyof` item_type of A. Else return `keyof` A.*/
export type Keyof_or_ItemKeyof<A> = A extends (infer _ArrayItemType_)[]? keyof _ArrayItemType_ : keyof A
/**If A is array then return true type of {item_type_of_A}_dot_P (AKA: A[0][P]). Else return true type of prop "P" of A (AKA: A[P]).*/
//@ts-ignore
export type PropType_or_ItemPropType<A,P extends Keyof_or_ItemKeyof<A>> = A extends (infer _ArrayItemType_)[]? _ArrayItemType_[P] : A[P]


/**Return `value` if `value!=avoidValue`, else return `defau`. (avoidValue is set to `null` if not specified.)*/
export function elvis<T>(value:T,defau:T,avoidValue:T=null):T {
    if(value==avoidValue) return defau;
    return value;
}
/**Return `value` if `value!=avoidValue`, else return `defau()`. (avoidValue is set to `null` if not specified.)*/
export function elvisLazy<T>(value:T,defau:()=>T,avoidValue:T=null):T {
    if(value==avoidValue) return defau();
    return value;
}
export function ternary<T>(test:Boolean,value:T,elseValue:T):T {
    if(test) return value;
    else return elseValue
}
export function ternaryLazy<T>(test:Boolean,value:()=>T,elseValue:()=>T):T {
    if(test){
        if(value != null){
            return value()
        }else{
            return value as unknown as T;
        }
    }
    else{
        if(elseValue != null){
            return elseValue()
        }else{
            return elseValue as unknown as T;
        }
    }
}
export function ternaryLazyWith<T>(value:T, test:(value:T)=>Boolean, elseValue:()=>T):T {
    if(test(value)==true) return value;
    else return elseValue()
}


export const nameofFactory = <T>() => (name: keyof T) => name;

type HasAtLeastOneProp<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]
/**Name of anything (variable,class,...). VD:nameof({SuperMan}) == "SuperMan".
 * <br> DO NOT write: nameof(SuperMan) ! (Must have curly brackets!)*/
function nameof(v:HasAtLeastOneProp<any>) {
    return Object.keys(v)[0];
}

//export const nameof = <T>(p: Extract<keyof T, string>): string => p;
/**nameof property*/
export const $$ = <T>(p: Extract<keyof T, string>): string => p;
/**nameof class*/
export const $$c = <T>(clazz:{new():T}): string => clazz.name;
/**nameof property, using lambda.*/
export function $$l<T>(lambda:(t:T)=>any):string {
    const lambdaAsString = lambda.toString();
    const lastIndexOfDot = lambdaAsString.lastIndexOf(".");
    if(lastIndexOfDot<0){
        console.log("[WARN](nameof)There are no dot in lambda:"+lambdaAsString);
    }
    const lastSemicolonOrSpace
    = ternaryLazyWith(
        lambdaAsString.lastIndexOf(";"),
        it=>it>lastIndexOfDot,
        ()=>ternaryLazyWith(
            lambdaAsString.lastIndexOf(_1Space),
            it=>it>lastIndexOfDot,
            ()=>lambdaAsString.lastIndexOf("}")
        )
    );
    return lambdaAsString.substring(lastIndexOfDot+1,lastSemicolonOrSpace);
}
/**nameof property, using lambda. Start from first dot.*/
export function $$l2<T>(lambda:(t:T)=>any):string {
    const lambdaAsString = lambda.toString();
    const firstIndexOfDot = lambdaAsString.indexOf(".");
    if(firstIndexOfDot<0){
        console.log("[WARN](nameof)There are no dot in lambda:"+lambdaAsString);
    }
    const lastSemicolonOrSpace
        = ternaryLazyWith(
        lambdaAsString.lastIndexOf(";"),
        it=>it>firstIndexOfDot,
        ()=>ternaryLazyWith(
            lambdaAsString.lastIndexOf(_1Space),
            it=>it>firstIndexOfDot,
            ()=>lambdaAsString.lastIndexOf("}")
        )
    );
    return lambdaAsString.substring(firstIndexOfDot+1,lastSemicolonOrSpace);
}
/**nameof property, using lambda. Start from first dot. Allow using list by using "[0]" (this func will remove "[0]" in the final string).*/
export function $$l3<T>(lambda:(t:T)=>any):string {
    const lambdaAsString = lambda.toString();
    const firstIndexOfDot = lambdaAsString.indexOf(".");
    if(firstIndexOfDot<0){
        console.log("[WARN](nameof)There are no dot in lambda:"+lambdaAsString);
    }
    const lastSemicolonOrSpace
        = ternaryLazyWith(
        lambdaAsString.lastIndexOf(";"),
        it=>it>firstIndexOfDot,
        ()=>ternaryLazyWith(
            lambdaAsString.lastIndexOf(_1Space),
            it=>it>firstIndexOfDot,
            ()=>lambdaAsString.lastIndexOf("}")
        )
    );
    return lambdaAsString.substring(firstIndexOfDot+1,lastSemicolonOrSpace).replace("[0]","");
}





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
export function $createAndDo<T>(tipe:{new():T}, obj:T, fun:(thisObj:T)=>void):T {
    const newObj = Object.assign(new tipe(),obj);
    fun(newObj);
    return newObj;
}
/*export function $buildNewExcluded<T extends {Excl}>(tipe:{new():T},v:Omit<T,keyof T["Excl"]>):T{
    return Object.assign(new tipe(),v);
}*/

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
/**To overcome the issue of JSON.stringify (:only 1 level). (???)*/
export function $logKeyValue(obj:any,stringify=false,beauty=false){
    try{
        console.log("[INFO]object key-value pairs:");
        console.log("{");
        for(let key of Object.keys(obj)){
            //.map(key => obj[key]);
            /*if(stringify){
                if(beauty){
                    console.log(`    "${key}":${stringify?JSON.stringify(obj[key]):obj[key]}`);
                }
            }*/
            console.log(`    "${key}":${stringify?JSON.stringify(obj[key]):obj[key]}`);
        }
        console.log("}");
    }catch (err) {
        console.log(err);
    }
}



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

export function initLater():any {
    return undefined
}
export type StringIn<T> = Extract<keyof T,string>

export function randomPick<T>(array:T[]):T {
    return array[Math.floor(Math.random() * array.length)];
}

/**VD:
whenEqual(x,
    {value:0,fun:()=>{
    }},{value:0,fun:()=>{
    }}
);
 */
export function whenEqual<T,R>(mainValue:T,...cases:{value:T,fun:(value?:T)=>R}[]):R {
    for(let caze of cases){
        if(caze.value === mainValue){
            return caze.fun(caze.value)
        }
    }
}

export function when<R>(...cases:{test:boolean,fun:()=>R}[]):R {
    for(let caze of cases){
        if(caze.test === true){
            return caze.fun()
        }
    }
}





