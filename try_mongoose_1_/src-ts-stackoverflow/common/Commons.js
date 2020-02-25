"use strict";
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
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    Object.defineProperty(MyLogger.prototype, "log", {
        set: function (value) {
            console.log(value);
        },
        enumerable: true,
        configurable: true
    });
    return MyLogger;
}());
exports.MyLogger = MyLogger;
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
