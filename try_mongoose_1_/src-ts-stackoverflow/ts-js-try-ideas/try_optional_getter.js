var Persoon = /** @class */ (function () {
    function Persoon() {
    }
    Object.defineProperty(Persoon.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    Persoon.prototype.sing = function () { };
    Persoon.prototype.jump = function () { };
    return Persoon;
}());
function accceptPropNamesOnly(arr) { return arr; }
accceptPropNamesOnly(["fullName"]);
var G = /** @class */ (function () {
    function G() {
    }
    return G;
}());
var ShouExcl = /** @class */ (function () {
    function ShouExcl() {
    }
    return ShouExcl;
}());
function buildWithExcl(v) { }
buildWithExcl({
    children: undefined,
    get fullName() {
        return "";
    },
    sing: function () {
    }
});
//function $buildWithExcl<T>(tipe:{new():T},v:Omit<T,keyof tipe.ShouExcl>){}
function buildWithExcl$(v) { }
buildWithExcl$({
    children: undefined,
    get fullName() {
        return "";
    },
    sing: function () {
    }
});
//# sourceMappingURL=try_optional_getter.js.map