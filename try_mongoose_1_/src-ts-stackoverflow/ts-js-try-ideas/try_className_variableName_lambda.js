function nameOf(ld) {
    var lambdaAsString = ld.toString();
    if (lambdaAsString.includes("function")) {
        return lambdaAsString.match(/return (.*?);/)[1].trim();
    }
    else if (lambdaAsString.includes("=>")) {
        return lambdaAsString.match(/=> (.*?)/)[1].trim();
    }
}
var SuperMario = /** @class */ (function () {
    function SuperMario() {
    }
    return SuperMario;
}());
console.log(nameOf(function () { return SuperMario; }));
console.log(nameOf(function () { /*a*/ return SuperMario; } /*b*/));
function varToString(varObj) {
    return Object.keys(varObj)[0];
}
var someVar = 42;
var someVar2 = { someVar: someVar };
console.log(varToString({ someVar: someVar }));
console.log(varToString({ SuperMario: SuperMario }));
function varToString2(varObj) {
    return Object.keys(varObj)[0];
}
// console.log(varToString2(someVar));
console.log(varToString2(someVar2));
console.log(varToString2(SuperMario));
console.log(varToString2({ someVar: someVar }));
console.log(varToString2({ someVar: someVar, someVar2: someVar2 }));
console.log(varToString2({ SuperMario: SuperMario }));
console.log("================================");
function varToString3(anything) {
    var _a;
    return Object.keys((_a = {}, _a[anything] = null, _a))[0];
}
console.log(varToString3(someVar));
console.log(varToString3(someVar2));
console.log(varToString3(SuperMario));
//# sourceMappingURL=try_className_variableName_lambda.js.map