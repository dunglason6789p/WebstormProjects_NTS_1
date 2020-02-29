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
function schemaFromType(value) {
    return value;
}
exports.schemaFromType = schemaFromType;
/**exclude props in Exclu.*/
function schemaFromTypeWithExclude(value) {
    return value;
}
exports.schemaFromTypeWithExclude = schemaFromTypeWithExclude;
/**exclude props in Exclu, then include props in Extraa.*/
function schemaFromTypeWithExcludeThenInclude(value) {
    return value;
}
exports.schemaFromTypeWithExcludeThenInclude = schemaFromTypeWithExcludeThenInclude;
/**optional version of `schemaFromType`*/
function schemaFromTypePartial(value) {
    return value;
}
exports.schemaFromTypePartial = schemaFromTypePartial;
exports.nameof = function (p) { return p; };
exports.$$ = function (p) { return p; };
//export const nameof2 = <T>(name: Extract<T, string>): string => name;
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
/**NTS: Instantiate new object from given class and given object,
 * then execute the callback, then return this object.*/
function $createThenExec(tipe, obj, callback) {
    var newObj = Object.assign(new tipe(), obj);
    callback(newObj);
    return newObj;
}
exports.$createThenExec = $createThenExec;
/*export function $buildNewExcluded<T extends {Excl}>(tipe:{new():T},v:Omit<T,keyof T["Excl"]>):T{
    return Object.assign(new tipe(),v);
}*/
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    Object.defineProperty(MyLogger.prototype, "log", {
        set: function (value) {
            console.log("[TRACE]log:");
            console.log(value);
        },
        enumerable: true,
        configurable: true
    });
    return MyLogger;
}());
exports.MyLogger = MyLogger;
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
function $logKeyValue(obj, stringify) {
    if (stringify === void 0) { stringify = false; }
    try {
        console.log("[INFO]object key-value pairs:");
        console.log("{");
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            //.map(key => obj[key]);
            console.log("    \"" + key + "\":" + (stringify ? JSON.stringify(obj[key]) : obj[key]));
        }
        console.log("}");
    }
    catch (err) {
        console.log(err);
    }
}
exports.$logKeyValue = $logKeyValue;
var ATest = /** @class */ (function () {
    function ATest() {
    }
    return ATest;
}());
var theName1 = exports.nameof("aPropx");
var theName1b = exports.nameof("ATest");
// const theName2 = nameof2<ATest>("aPropx");
var theName9 = exports.$$("aPropx");
var theName9b = exports.$$("ATest");
var nameofFactory = function () { return function (name) { return name; }; };
var theName3 = nameofFactory();
console.log(theName3);
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
//region try `schemaFromTypeWithExclude`
var x1 = schemaFromTypeWithExclude({
    age: 0,
    fullName: "",
    strength: 123
});
var x2 = schemaFromTypeWithExcludeThenInclude({
    isBad: undefined,
    age: 0,
    fullName: "",
    strength: 123
});
// prop name (not string) is also POSSIBLE:
var x1b = schemaFromTypeWithExclude({
    fullName: ""
});
//endregion
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car1 = $buildExclude({ age: undefined, speed: undefined });
