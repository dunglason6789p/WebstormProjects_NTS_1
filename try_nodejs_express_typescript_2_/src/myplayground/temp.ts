class Greeter {
    get tuoiGi(): number {
        return this._tuoiGi;
    }
    set tuoiGi(value: number) {
        if(value > 200) throw new Error();
        else console.log("set OK");
        this._tuoiGi = value;
    }
    private _tuoiGi: number;

    greeting: string;

    constructor(init?: Partial<Greeter>) {
        Object.assign(this,init);
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

const greeter3 = new Greeter({tuoiGi:5,greeting:""});
console.log(greeter3.tuoiGi);

const anything: any = {};
anything.anyprop = 123;


class Door{
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }
    private _width: number;
    height: number;
}
class House{
    windows: Door[];
}
const door1: Door = Object.assign(new Door(),{width: 1});
console.log(door1.width);

