class Greeter {
    constructor(init) {
        Object.assign(this, init);
    }
    get tuoiGi() {
        return this._tuoiGi;
    }
    set tuoiGi(value) {
        if (value > 200)
            throw new Error();
        else
            console.log("set OK");
        this._tuoiGi = value;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
const greeter2 = new Greeter();
// greeter2.hello = 0;
// console.log(greeter2.hello);
greeter2.greeting = "a string";
console.log(greeter2.greeting);
greeter2.tuoiGi = 100;
console.log(greeter2.tuoiGi);
const greeter3 = new Greeter({ tuoiGi: 5, greeting: "" });
console.log(greeter3.tuoiGi);
const anything = {};
anything.anyprop = 123;
class Door {
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
}
class House {
}
const door1 = Object.assign(new Door(), { width: 1 });
console.log(door1.width);
//# sourceMappingURL=temp.js.map