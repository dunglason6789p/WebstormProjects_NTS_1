"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../common/Commons");
var arr1 = (function () {
    var arrTemp = [];
    for (var i = 0; i < 10; i++) {
        arrTemp.push(i);
    }
    return arrTemp;
})();
console.log("created arr1");
var arr2 = (function () {
    var arrTemp = [];
    for (var i = 0; i < 20; i++) {
        arrTemp.push(i);
    }
    return arrTemp;
})();
console.log("created arr2");
var arr3 = [1, 2, 3];
var x1 = Commons_1.$array(arr1);
var x2 = Object.getPrototypeOf(Commons_1.$array(arr1));
console.log(Commons_1.$array(arr1));
console.log(Object.getPrototypeOf(Commons_1.$array(arr1)));
var x = Commons_1.$array(arr1)
    .pushAll(arr2)
    .pushAll(arr3).array;
console.log(x);
console.log(arr1);
