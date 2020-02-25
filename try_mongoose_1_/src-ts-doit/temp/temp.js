"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../common/Commons");
var World = /** @class */ (function () {
    function World() {
    }
    return World;
}());
var abc = typeof World;
console.log(abc);
var Window = /** @class */ (function () {
    function Window(v) {
        this.width = 3;
        this.fullName = "anomnymouss";
        Object.assign(this, v);
    }
    Window.prototype.doSth = function (x) {
        return x;
    };
    return Window;
}());
var window1 = new Window({ height: 10, fullName: "a wind" });
console.log(window1);
var $$ = Commons_1.nameof;
console.log($$("height"));
console.log($$("doSth"));
console.log($$("height"));
