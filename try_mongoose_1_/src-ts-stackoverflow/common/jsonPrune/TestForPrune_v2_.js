"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonPrune_1 = require("./JsonPrune");
var Recursiver = /** @class */ (function () {
    function Recursiver() {
        this.x = new Recursiver();
    }
    return Recursiver;
}());
setTimeout(function () {
    console.log("hello");
}, 1000);
for (var i = 0; i < 999999; i++) {
    try {
        JsonPrune_1.JSONx.logJsonDeep(new Recursiver());
    }
    catch (e) {
        //console.error(e);
    }
}
//# sourceMappingURL=TestForPrune_v2_.js.map