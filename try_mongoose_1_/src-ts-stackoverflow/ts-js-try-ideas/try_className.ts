class Galaxy{
    weightInKg:number;
}
class SunTory{
    galaxyWhat:Galaxy
}
type K3 = keyof { [x: string]: Galaxy };
type K4 = keyof { superMan: Galaxy };
const x:K3 = 6;

type X1 = SunTory["galaxyWhat"]

//...........???????????

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];
type X1234 = ArrayElement<[SunTory]>; // string

//...........??????????? what

type X2 = keyof [SunTory]; // string
type X3 = keyof [SunTory][0]; // string
type X4 = keyof {SunToryx}; // string

const x4_:X4 = "SunToryx";

function classNameOf<T,C=Extract<keyof{T},string>>(n:C):string {
    return n as unknown as string;
}
function classNameOf2<T,C=keyof{T}>(n:C):string {
    return n as unknown as string;
}
function classNameOf3<T extends {new():T},C=keyof{T}>(n:C):string {
    return n as unknown as string;
}
function classNameOf4<X,T = {new():X},C=keyof{T}>(n:C):string {
    return n as unknown as string;
}

//console.log(classNameOf<SunTory>(123));
// console.log(classNameOf3<SunTory>(123));
console.log(classNameOf4<SunTory>("T"));


function classNameOf5<X,T = {new():X},C=keyof[T]>(n:C):string {
    return n as unknown as string;
}
function classNameOf6<C,X extends {new():C,name:any}>(n: X["name"]):string {
    return n;
}
// classNameOf6<SunTory,SunTory>("abc")
const sun1 = new SunTory();
sun1.constructor.name;

function classNameOf7<C extends {constructor:{name}}>(n: C["constructor"]["name"]):string {
    return n;
}
// classNameOf7<SunTory>(123);
/*function classNameOf8<C,X={xxx:C}>(n:X["xxx"]):string {
    return n as unknown as string;
}*/
/*
function classNameOf8<X,T = {new():X},C=keyof{[T]:string}>(n:C):string {
    return n as unknown as string;
}*/

type M1 = {
    // @ts-ignore
    [SunTory.name]:any
}
type KM1 = keyof M1
// const xKM1:KM1 = 123
//@ts-ignore
type CN1 = SunTory.name;
const xCN1:CN1 = 123;
// type CN1 = (new SunTory()).constructor.name;
const sonnnguyex = {sonsonnnt:123};
// type KM2 = sonnnguyex.sonsonnnt

namespace MyName{
    const strName = SunTory.name
}
// type KM3 = MyName.strName;
function nameOf2<X>(s:keyof X):string {
    return s as unknown as string
}
const var1 = 123;
// nameOf2<var1>("adf");
// nameOf2<SunTory>("adf");
function nameOf3<X extends string>(s:X):string {
    return s
}
const var2 = nameOf3<"var1">("var1");

type IT = InstanceType<typeof SunTory>;  // C
// const xIT:IT = "SunTory";


type FlattenIfArray<T> = T extends (infer R)[] ? R : T
// const xFIA:FlattenIfArray<{x:456}[]> = 123;
// type XXX123<T> = {[T]:any}

function set<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    return Object.assign(obj, {
        [key]: value,
    });
}

type withKey<K extends string | number | symbol> = {
    [k in K]: any
}
// type ko1<T> = keyof withKey<T>


type withKey2<K extends string | number | symbol | any> = {
    [k in K]: any
}
type ko2<T> = keyof withKey2<T>
// const x_ko2:ko2<SunTory> = "SunTory";


