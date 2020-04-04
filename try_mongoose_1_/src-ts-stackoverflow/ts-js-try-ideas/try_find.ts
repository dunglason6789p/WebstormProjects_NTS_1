import {ModelInterface, SomePropName} from "../common/Commons";
import {Document, Model} from "mongoose";
import {Question} from "../model/Question";
//import {Question2} from "../model/Question2";
function doFind<T>(monModel:Model<Document>,conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    return monModel.find(conditions,projection,callback);
}
function doFind2<T extends {MonModel:Model<Document>}>(conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    // const clazz:
    // return T.monModel.find(conditions,projection,callback);
}
function doFind3<T extends {MonModel:Model<Document>}>(tipe:T,conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    return tipe.MonModel.find(conditions,projection,callback);
}
function doFind4<T>(tipe:T|{MonModel:Model<Document>},conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    // @ts-ignore
    return tipe.MonModel.find(conditions,projection,callback);
}
function doFind5<T>(tipe:T,conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    // @ts-ignore
    return tipe.MonModel.find(conditions,projection,callback);
}
function doFind6<T extends ModelInterface & {MonModel:Model<Document>}>(tipe:T,conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    return tipe.MonModel.find(conditions,projection,callback);
}
function doFind7<T>(insta:T,conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    // @ts-ignore
    return (typeof insta).MonModel.find(conditions,projection,callback);
}
function doFind8<T>(tipe:{new():T},conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    // @ts-ignore
    return tipe.MonModel.find(conditions,projection,callback);
}
function doFind9<T>(tipe:{new():T} & {MonModel:Model<Document>},conditions:SomePropName<T>,projection?:{prop:Extract<keyof T, string>},callback?:(err:any,docs:any)=>any){
    return tipe.MonModel.find(conditions,projection,callback);
}

const res1 = doFind<Question>(Question.MonModel,{},{prop:"title"},((err, docs) => {}));
//const res3 = doFind3(Question,{},{prop:"title"},((err, docs) => {}));
//const res5 = doFind5(Question,{},{prop:"title"},((err, docs) => {}));
//const res6 = doFind6(Question,{},{prop:"title"},null);

//const f3 = doFind3(new Question2(),{title:""},{prop:"title"},null);
//const f5 = doFind5(new Question2(),{title:""},{prop:"title"},null);
//const f5bb = doFind5(Question2,{title:""},{prop:"title"},null);
const f8 = doFind8(Question,{title:"244"},{prop:"featuredList"},null);
const f9 = doFind9(Question,{title:"244"},{prop:"featuredList"},null);
