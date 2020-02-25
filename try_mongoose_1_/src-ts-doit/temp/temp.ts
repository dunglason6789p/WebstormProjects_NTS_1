export {};

import {nameof} from "../common/Commons";

class World{

}
const abc = typeof World;
console.log(abc);

class Window{
    constructor(v:Partial<Window>) {
        Object.assign(this, v);
    }
    height?:number;
    width?:number = 3;
    fullName?:string = "anomnymouss";
    doSth(x:number){
        return x;
    }
}

let window1 = new Window({height:10,fullName:"a wind"});
console.log(window1);

const $$ = nameof;
console.log($$<Window>("height"));
console.log($$<Window>("doSth"));
console.log($$<Window>("height"));

