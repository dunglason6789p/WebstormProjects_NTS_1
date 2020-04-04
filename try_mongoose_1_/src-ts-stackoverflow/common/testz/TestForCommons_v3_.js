"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cleanseAssertionOperators(parsedName) {
    return parsedName.replace(/[?!]/g, "");
}
function nameof(nameFunction) {
    var fnStr = nameFunction.toString();
    // ES6 class name:
    // "class ClassName { ..."
    if (fnStr.startsWith("class ")
        // Theoretically could, for some ill-advised reason, be "class => class.prop".
        && !fnStr.startsWith("class =>")) {
        return cleanseAssertionOperators(fnStr.substring("class ".length, fnStr.indexOf(" {")));
    }
    // ES6 prop selector:
    // "x => x.prop"
    if (fnStr.includes("=>")) {
        return cleanseAssertionOperators(fnStr.substring(fnStr.indexOf(".") + 1));
    }
    // ES5 prop selector:
    // "function (x) { return x.prop; }"
    if ((new RegExp(/function(\s)?\(/, "g")).test(fnStr)) {
        var firstDotIndex = fnStr.indexOf(".");
        var semicolonIndex = fnStr.indexOf(";");
        return cleanseAssertionOperators(fnStr.substring(firstDotIndex + 1, semicolonIndex));
    }
    // ES5 class name:
    // "function ClassName() { ..."
    if (fnStr.startsWith("function ")) {
        return cleanseAssertionOperators(fnStr.substring("function ".length, fnStr.indexOf("(")));
    }
    // Invalid function.
    throw new Error("ts-simple-nameof: Invalid function.");
}
exports.nameof = nameof;
var BigCar = /** @class */ (function () {
    function BigCar() {
    }
    return BigCar;
}());
console.log(nameof(function (car) { return car.weightLow; }));
//# sourceMappingURL=TestForCommons_v3_.js.map