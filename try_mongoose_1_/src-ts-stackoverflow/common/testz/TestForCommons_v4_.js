"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../Commons");
var x = 2;
Commons_1.whenEqual(x, { value: 0, fun: function () { } });
Commons_1.whenEqual(x, { value: 0, fun: function () { } });
Commons_1.whenEqual(x, { value: 0, fun: function () {
    } }, { value: 0, fun: function () {
    } });
Commons_1.whenEqual(x, {
    value: 0,
    fun: function () {
    }
});
Commons_1.whenEqual(x, { value: 0, fun: function () {
    }
});
var xxx = (_a = {},
    _a[(1 == 1) + ""] = 111,
    _a[(2 == 2) + ""] = 222,
    _a);
console.log(xxx);
var tern1 = Commons_1.ternaryLazy(1 == 1, function () { return 2; }, function () { return 3; });
console.log(tern1);
// const tern2 = ternaryLazy(false,()=>2,()=>3);
var tern2 = Commons_1.ternaryLazy(false, undefined, function () { return 3; });
console.log(tern2);
console.log(Commons_1.ternaryLazy(true, null, null));
console.log(Commons_1.ternaryLazy(false, null, null));
console.log(Commons_1.ternaryLazy(true, undefined, null));
console.log(Commons_1.ternaryLazy(false, null, undefined));
//# sourceMappingURL=TestForCommons_v4_.js.map