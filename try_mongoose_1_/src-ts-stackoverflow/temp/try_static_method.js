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
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.say = function () { };
    Dog.build = function (v) { Object.assign(this, v); };
    Dog.buildPartial = function (v) { Object.assign(this, v); };
    return Dog;
}());
var dog1 = Dog.build({ fullName: "", isGood: false, weight: 0 });
console.log(dog1);
var ClassParent = /** @class */ (function () {
    function ClassParent() {
    }
    ClassParent.psiMethod = function (v) { return v; };
    ClassParent.psiMethodAny = function (v) { return v; };
    return ClassParent;
}());
var InterChild = /** @class */ (function () {
    function InterChild() {
    }
    InterChild.prototype.psiMethod = function (v) {
    };
    return InterChild;
}());
var ClassChild = /** @class */ (function (_super) {
    __extends(ClassChild, _super);
    function ClassChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassChild.psiMethod = function (v) { return null; };
    ClassChild.psiMethodAny = function (v) { return v; };
    return ClassChild;
}(ClassParent));
var BuildDoc = /** @class */ (function () {
    function BuildDoc() {
    }
    BuildDoc.buildDoc = function (v) { };
    return BuildDoc;
}());
var Modall = /** @class */ (function () {
    function Modall() {
    }
    return Modall;
}());
