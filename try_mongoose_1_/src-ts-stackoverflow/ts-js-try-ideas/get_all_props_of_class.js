"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
        this.defauut = 100;
        this.funcDefauut = function (v) { return v * 2; };
    }
    return Car;
}());
function getAllPropKey(tipe) {
    try {
        var obj = new tipe();
        return Object.keys(obj);
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
function getAllPropValue(tipe) {
    try {
        var obj_1 = new tipe();
        return Object.keys(obj_1).map(function (key) { return obj_1[key]; });
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
function logAllPropKeyValue(tipe) {
    try {
        var obj = new tipe();
        console.log("[INFO]object key-value pairs:");
        console.log("{");
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            //.map(key => obj[key]);
            console.log("    \"" + key + "\":" + obj[key]);
        }
        console.log("}");
    }
    catch (err) {
        console.log(err);
    }
}
logAllPropKeyValue(Car);
//# sourceMappingURL=get_all_props_of_class.js.map