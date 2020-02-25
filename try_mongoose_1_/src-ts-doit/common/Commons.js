"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaOfType(value) {
    return value;
}
exports.schemaOfType = schemaOfType;
exports.nameof = function (name) { return name; };
//export const nameof2 = <T>(name: Extract<T, string>): string => name;
var ATest = /** @class */ (function () {
    function ATest() {
    }
    return ATest;
}());
var theName1 = exports.nameof("aPropx");
var theName1b = exports.nameof("ATest");
// const theName2 = nameof2<ATest>("aPropx");
var nameofFactory = function () { return function (name) { return name; }; };
var theName3 = nameofFactory();
console.log(theName3);
