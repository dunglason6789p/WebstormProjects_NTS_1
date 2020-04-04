"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Const_1 = require("./Const");
/**Return `value` if `value!=avoidValue`, else return `defau`. (avoidValue is set to `null` if not specified.)*/
function elvis(value, defau, avoidValue) {
    if (avoidValue === void 0) { avoidValue = null; }
    if (value == avoidValue)
        return defau;
    return value;
}
exports.elvis = elvis;
/**Return `value` if `value!=avoidValue`, else return `defau()`. (avoidValue is set to `null` if not specified.)*/
function elvisLazy(value, defau, avoidValue) {
    if (avoidValue === void 0) { avoidValue = null; }
    if (value == avoidValue)
        return defau();
    return value;
}
exports.elvisLazy = elvisLazy;
function ternary(test, value, elseValue) {
    if (test)
        return value;
    else
        return elseValue;
}
exports.ternary = ternary;
function ternaryLazy(test, value, elseValue) {
    if (test) {
        if (value != null) {
            return value();
        }
        else {
            return value;
        }
    }
    else {
        if (elseValue != null) {
            return elseValue();
        }
        else {
            return elseValue;
        }
    }
}
exports.ternaryLazy = ternaryLazy;
function ternaryLazyWith(value, test, elseValue) {
    if (test(value) == true)
        return value;
    else
        return elseValue();
}
exports.ternaryLazyWith = ternaryLazyWith;
exports.nameofFactory = function () { return function (name) { return name; }; };
/**Name of anything (variable,class,...). VD:nameof({SuperMan}) == "SuperMan".
 * <br> DO NOT write: nameof(SuperMan) ! (Must have curly brackets!)*/
function nameof(v) {
    return Object.keys(v)[0];
}
//export const nameof = <T>(p: Extract<keyof T, string>): string => p;
/**nameof property*/
exports.$$ = function (p) { return p; };
/**nameof class*/
exports.$$c = function (clazz) { return clazz.name; };
/**nameof property, using lambda.*/
function $$l(lambda) {
    var lambdaAsString = lambda.toString();
    var lastIndexOfDot = lambdaAsString.lastIndexOf(".");
    if (lastIndexOfDot < 0) {
        console.log("[WARN](nameof)There are no dot in lambda:" + lambdaAsString);
    }
    var lastSemicolonOrSpace = ternaryLazyWith(lambdaAsString.lastIndexOf(";"), function (it) { return it > lastIndexOfDot; }, function () { return ternaryLazyWith(lambdaAsString.lastIndexOf(Const_1._1Space), function (it) { return it > lastIndexOfDot; }, function () { return lambdaAsString.lastIndexOf("}"); }); });
    return lambdaAsString.substring(lastIndexOfDot + 1, lastSemicolonOrSpace);
}
exports.$$l = $$l;
/**nameof property, using lambda. Start from first dot.*/
function $$l2(lambda) {
    var lambdaAsString = lambda.toString();
    var firstIndexOfDot = lambdaAsString.indexOf(".");
    if (firstIndexOfDot < 0) {
        console.log("[WARN](nameof)There are no dot in lambda:" + lambdaAsString);
    }
    var lastSemicolonOrSpace = ternaryLazyWith(lambdaAsString.lastIndexOf(";"), function (it) { return it > firstIndexOfDot; }, function () { return ternaryLazyWith(lambdaAsString.lastIndexOf(Const_1._1Space), function (it) { return it > firstIndexOfDot; }, function () { return lambdaAsString.lastIndexOf("}"); }); });
    return lambdaAsString.substring(firstIndexOfDot + 1, lastSemicolonOrSpace);
}
exports.$$l2 = $$l2;
/**nameof property, using lambda. Start from first dot. Allow using list by using "[0]" (this func will remove "[0]" in the final string).*/
function $$l3(lambda) {
    var lambdaAsString = lambda.toString();
    var firstIndexOfDot = lambdaAsString.indexOf(".");
    if (firstIndexOfDot < 0) {
        console.log("[WARN](nameof)There are no dot in lambda:" + lambdaAsString);
    }
    var lastSemicolonOrSpace = ternaryLazyWith(lambdaAsString.lastIndexOf(";"), function (it) { return it > firstIndexOfDot; }, function () { return ternaryLazyWith(lambdaAsString.lastIndexOf(Const_1._1Space), function (it) { return it > firstIndexOfDot; }, function () { return lambdaAsString.lastIndexOf("}"); }); });
    return lambdaAsString.substring(firstIndexOfDot + 1, lastSemicolonOrSpace).replace("[0]", "");
}
exports.$$l3 = $$l3;
/* class decorator: It must implement static methods that come from some interface T (in T, the method is NOT static!).
* Example: @mustImpStatMethFrom<ComparableStatic<TableCell>>()*/
function mustImpStatMethFrom() {
    return function (something) { };
}
exports.mustImpStatMethFrom = mustImpStatMethFrom;
var Buildable = /** @class */ (function () {
    function Buildable() {
    }
    Buildable.$build = function (v) { };
    Buildable.$buildPartial = function (v) { };
    return Buildable;
}());
exports.Buildable = Buildable;
function $build(v) { return v; }
exports.$build = $build;
function $buildPartial(v) { return v; }
exports.$buildPartial = $buildPartial;
function $buildRequired(v) { return v; }
exports.$buildRequired = $buildRequired;
function $buildExclude(v) { return v; }
exports.$buildExclude = $buildExclude;
/**NTS: Instantiate new object from given class and given object.*/
function $create(tipe, v) {
    return Object.assign(new tipe(), v);
}
exports.$create = $create;
function $createExclude(tipe, v) {
    return Object.assign(new tipe(), v);
}
exports.$createExclude = $createExclude;
/**NTS: Instantiate new object from given class and given object,
 * then execute the callback, then return this object.*/
function $createAndDo(tipe, obj, fun) {
    var newObj = Object.assign(new tipe(), obj);
    fun(newObj);
    return newObj;
}
exports.$createAndDo = $createAndDo;
/*export function $buildNewExcluded<T extends {Excl}>(tipe:{new():T},v:Omit<T,keyof T["Excl"]>):T{
    return Object.assign(new tipe(),v);
}*/
var ArrayExtended = /** @class */ (function (_super) {
    __extends(ArrayExtended, _super);
    function ArrayExtended(items) {
        return _super.apply(this, items) || this;
    }
    Object.defineProperty(ArrayExtended.prototype, "array", {
        get: function () {
            return this._array;
        },
        enumerable: true,
        configurable: true
    });
    ArrayExtended.create = function (arr) {
        var obj = Object.create(ArrayExtended.prototype);
        obj._array = (arr !== null && arr !== void 0 ? arr : []);
        return obj;
    };
    /**NTS:  <b>MODIFY</b> the internal array `_array` by adding all items from argument array `arr` using `for` loop
     * to avoid `Javascript Heap out of memory` Error.*/
    ArrayExtended.prototype.pushAll = function (arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            this._array.push(item);
        }
        return this;
    };
    return ArrayExtended;
}(Array));
/**NTS:Create a ArrayExtended wrapper for this array.*/
function $array(arr) {
    return ArrayExtended.create(arr);
}
exports.$array = $array;
var ObjectExtended = /** @class */ (function () {
    function ObjectExtended(obj) {
        this._obj = obj;
    }
    Object.defineProperty(ObjectExtended.prototype, "obj", {
        get: function () {
            return this._obj;
        },
        enumerable: true,
        configurable: true
    });
    ObjectExtended.prototype.exec = function (callback) {
        callback(this._obj);
        return this;
    };
    return ObjectExtended;
}());
function $obj(obj) {
    return new ObjectExtended(obj);
}
exports.$obj = $obj;
/**NTS: Execute the function on this object, then return this object*/
function $exec(obj, f) {
    var argArray = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argArray[_i - 2] = arguments[_i];
    }
    f.apply(obj, argArray);
    return obj;
}
exports.$exec = $exec;
/**NTS: Execute the callback, then return this object. Example: `const x = $execCB(p1,(v)=>{v.say()});` <-- `p1` is passed into `v`.*/
function $execCB(obj, callback) {
    callback(obj);
    return obj;
}
exports.$execCB = $execCB;
function $getKeys(obj, isClass) {
    if (isClass === void 0) { isClass = false; }
    try {
        if (isClass) {
            obj = new obj();
        }
        return Object.keys(obj);
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
exports.$getKeys = $getKeys;
/**To overcome the issue of JSON.stringify (:only 1 level). (???)*/
function $logKeyValue(obj, stringify, beauty) {
    if (stringify === void 0) { stringify = false; }
    if (beauty === void 0) { beauty = false; }
    try {
        console.log("[INFO]object key-value pairs:");
        console.log("{");
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            //.map(key => obj[key]);
            /*if(stringify){
                if(beauty){
                    console.log(`    "${key}":${stringify?JSON.stringify(obj[key]):obj[key]}`);
                }
            }*/
            console.log("    \"" + key + "\":" + (stringify ? JSON.stringify(obj[key]) : obj[key]));
        }
        console.log("}");
    }
    catch (err) {
        console.log(err);
    }
}
exports.$logKeyValue = $logKeyValue;
/**Access the given property of the object, set default value if that property is currently null, then return the value of that property.<br>
 * It is OK to use null as value of key-value pair in `defau` e.g: {prop1:null}, when so, nothing will change, the function just return
 * the property!*/
function $a(obj, defau) {
    var key = Object.keys(defau)[0];
    if (obj[key] == null) {
        obj[key] = defau[key]; //OK even if `defau[key]==null`.
    }
    return obj[key];
}
exports.$a = $a;
function initLater() {
    return undefined;
}
exports.initLater = initLater;
function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.randomPick = randomPick;
/**VD:
whenEqual(x,
    {value:0,fun:()=>{
    }},{value:0,fun:()=>{
    }}
);
 */
function whenEqual(mainValue) {
    var cases = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        cases[_i - 1] = arguments[_i];
    }
    for (var _a = 0, cases_1 = cases; _a < cases_1.length; _a++) {
        var caze = cases_1[_a];
        if (caze.value === mainValue) {
            return caze.fun(caze.value);
        }
    }
}
exports.whenEqual = whenEqual;
function when() {
    var cases = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cases[_i] = arguments[_i];
    }
    for (var _a = 0, cases_2 = cases; _a < cases_2.length; _a++) {
        var caze = cases_2[_a];
        if (caze.test === true) {
            return caze.fun();
        }
    }
}
exports.when = when;
//# sourceMappingURL=Commons.js.map