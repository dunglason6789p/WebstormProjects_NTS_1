"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonMongoose_1 = require("../CommonMongoose");
var Commons_1 = require("../Commons");
var ATest = /** @class */ (function () {
    function ATest() {
    }
    return ATest;
}());
var theName1 = Commons_1.$$("aPropx");
var theName1b = Commons_1.$$("ATest");
// const theName2 = nameof2<ATest>("aPropx");
var theName9 = Commons_1.$$("aPropx");
var theName9b = Commons_1.$$("ATest");
var theName3 = Commons_1.nameofFactory();
console.log(theName3);
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
//region try `schemaFromTypeWithExclude`
var x1 = CommonMongoose_1.schemaFromTypeWithExclude({
    age: 0,
    fullName: "",
    strength: 123
});
var x2 = CommonMongoose_1.schemaFromTypeWithExcludeThenInclude({
    isBad: undefined,
    age: 0,
    fullName: "",
    strength: 123
});
// prop name (not string) is also POSSIBLE:
var x1b = CommonMongoose_1.schemaFromTypeWithExclude({
    fullName: ""
});
//endregion
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car1 = Commons_1.$buildExclude({ age: undefined, speed: undefined });
//# sourceMappingURL=TestForCommons.js.map