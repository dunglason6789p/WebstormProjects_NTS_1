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
function fun1(v) {
}
fun1({ fullName: 158, age: "wer", pet: undefined });
var Requiredx = /** @class */ (function () {
    function Requiredx() {
    }
    return Requiredx;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parent.Required = Requiredx;
    return Parent;
}(Requiredx));
var parent = new Parent();
parent.theAge = 1;
parent.theFav = null;
