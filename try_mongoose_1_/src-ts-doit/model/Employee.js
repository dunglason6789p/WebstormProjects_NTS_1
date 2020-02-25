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
var mongoose = require('mongoose');
var Commons_1 = require("../common/Commons");
var _Req = /** @class */ (function () {
    function _Req() {
    }
    return _Req;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}(_Req));
exports.Employee = Employee;
(function (Employee) {
    var R = /** @class */ (function (_super) {
        __extends(R, _super);
        function R() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return R;
    }(_Req));
    Employee.R = R;
    Employee.schema = new mongoose.Schema(Commons_1.schemaOfType({
        age: { type: Number, required: true },
        favorites: {},
        firstName: {},
        lastName: {},
    }));
    var Model = mongoose.model(Employee.name, Employee.schema);
    function build(v) { return new Model(v); }
    Employee.build = build;
    function buildAllProp(v) { return new Model(v); }
    Employee.buildAllProp = buildAllProp;
})(Employee = exports.Employee || (exports.Employee = {}));
exports.Employee = Employee;
