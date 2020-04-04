"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.defauut = 6789;
        this.func = function (v) { return v * 2; };
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            console.log("get fullName");
            return this._fullName;
        },
        set: function (value) {
            console.log("set fullName");
            this.weight = 69;
            this.funny = 12345;
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.$create = function (v) {
        var p = new Person();
        return Object.assign(p, v);
    };
    return Person;
}());
console.log(JSON.stringify(Person.$create({ funny: -1, fullName: "ntson", age: 15, extraa: 50 }), null, 4));
//# sourceMappingURL=try_object_assign_setter.js.map