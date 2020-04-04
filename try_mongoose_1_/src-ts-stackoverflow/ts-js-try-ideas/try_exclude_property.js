"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaOfType(value) {
    return value;
}
exports.schemaOfType = schemaOfType;
/**exclude props in Exclu.*/
function schemaOfTypeWithExclude(value) {
    return value;
}
exports.schemaOfTypeWithExclude = schemaOfTypeWithExclude;
/**exclude props in Exclu, then include props in Extraa.*/
function schemaOfTypeWithExcludeThenInclude(value) {
    return value;
}
exports.schemaOfTypeWithExcludeThenInclude = schemaOfTypeWithExcludeThenInclude;
//function aaa(v:Omit)
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
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
var x1 = schemaOfTypeWithExclude({
    age: 0,
    fullName: ""
});
var x2 = schemaOfTypeWithExcludeThenInclude({
    isBad: undefined,
    age: 0,
    fullName: ""
});
//# sourceMappingURL=try_exclude_property.js.map