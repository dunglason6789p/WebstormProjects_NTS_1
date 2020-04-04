function $exec(obj, f) {
    var argArray = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argArray[_i - 2] = arguments[_i];
    }
    f.apply(obj, argArray);
    return obj;
}
function $execCB(obj, c) {
    c(obj);
    return obj;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log(this.thinking);
    };
    Person.prototype.repeat = function (v) {
        console.log("repeat: " + v);
    };
    Person.prototype.cook = function (s, n) {
        console.log(s + " X " + n);
    };
    return Person;
}());
var p1 = new Person();
p1.thinking = "I want to be smart";
var p1_ = $exec(p1, p1.repeat, "you are dumb");
var p1b_ = $exec(p1, p1.repeat, "you are super dumb", "haha");
var p2_ = $exec(p1, p1.cook, "rice white", 3);
console.log("p1_: " + p1_.thinking);
console.log("p2_: " + p2_.thinking);
var p3_ = $execCB(p1, function (v) { v.say(); });
console.log("p3_: " + p3_.thinking);
//# sourceMappingURL=try_call_function_on_object.js.map