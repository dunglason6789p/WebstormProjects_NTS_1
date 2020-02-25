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
// @ts-nocheck
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    somethingElse: Number,
});
var Lalala = /** @class */ (function () {
    function Lalala() {
    }
    return Lalala;
}());
var sexy = new Lalala();
var oops = new sexy();
var Gener = /** @class */ (function () {
    function Gener(value) {
        this.meth(value);
    }
    return Gener;
}());
var GenerXuser = /** @class */ (function (_super) {
    __extends(GenerXuser, _super);
    function GenerXuser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenerXuser.prototype.meth = function (value) {
        this.model = new exports.UserModelX();
    };
    return GenerXuser;
}(Gener));
exports.UserModelX = mongoose.model('User', exports.UserSchema);
var UserModelXBuilder = /** @class */ (function () {
    function UserModelXBuilder(z) {
        this.model = new exports.UserModelX(z);
    }
    return UserModelXBuilder;
}());
exports.UserModelXBuilder = UserModelXBuilder;
