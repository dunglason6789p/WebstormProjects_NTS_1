"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question_1 = require("../model/Question");
//import {Question2} from "../model/Question2";
function doFind(monModel, conditions, projection, callback) {
    return monModel.find(conditions, projection, callback);
}
function doFind2(conditions, projection, callback) {
    // const clazz:
    // return T.monModel.find(conditions,projection,callback);
}
function doFind3(tipe, conditions, projection, callback) {
    return tipe.MonModel.find(conditions, projection, callback);
}
function doFind4(tipe, conditions, projection, callback) {
    // @ts-ignore
    return tipe.MonModel.find(conditions, projection, callback);
}
function doFind5(tipe, conditions, projection, callback) {
    // @ts-ignore
    return tipe.MonModel.find(conditions, projection, callback);
}
function doFind6(tipe, conditions, projection, callback) {
    return tipe.MonModel.find(conditions, projection, callback);
}
function doFind7(insta, conditions, projection, callback) {
    // @ts-ignore
    return (typeof insta).MonModel.find(conditions, projection, callback);
}
function doFind8(tipe, conditions, projection, callback) {
    // @ts-ignore
    return tipe.MonModel.find(conditions, projection, callback);
}
function doFind9(tipe, conditions, projection, callback) {
    return tipe.MonModel.find(conditions, projection, callback);
}
var res1 = doFind(Question_1.Question.MonModel, {}, { prop: "title" }, (function (err, docs) { }));
//const res3 = doFind3(Question,{},{prop:"title"},((err, docs) => {}));
//const res5 = doFind5(Question,{},{prop:"title"},((err, docs) => {}));
//const res6 = doFind6(Question,{},{prop:"title"},null);
//const f3 = doFind3(new Question2(),{title:""},{prop:"title"},null);
//const f5 = doFind5(new Question2(),{title:""},{prop:"title"},null);
//const f5bb = doFind5(Question2,{title:""},{prop:"title"},null);
var f8 = doFind8(Question_1.Question, { title: "244" }, { prop: "featuredList" }, null);
var f9 = doFind9(Question_1.Question, { title: "244" }, { prop: "featuredList" }, null);
//# sourceMappingURL=try_find.js.map