function $exec<T>(obj:T,f:Function,...argArray):T {
    f.apply(obj,argArray);
    return obj;
}
function $execCB<T>(obj:T,c:(thisObj:T)=>void):T {
    c(obj);
    return obj;
}
class Person{
    thinking:string;
    say(){
        console.log(this.thinking);
    }
    repeat(v:string){
        console.log("repeat: "+v);
    }
    cook(s:string,n:number){
        console.log(s+" X "+n);
    }
}
const p1 = new Person();
p1.thinking = "I want to be smart";
const p1_ = $exec(p1,p1.repeat,"you are dumb");
const p1b_ = $exec(p1,p1.repeat,"you are super dumb","haha");
const p2_ = $exec(p1,p1.cook,"rice white",3);
console.log("p1_: "+p1_.thinking);
console.log("p2_: "+p2_.thinking);

const p3_ = $execCB(p1,(v)=>{v.say()});
console.log("p3_: "+p3_.thinking);
