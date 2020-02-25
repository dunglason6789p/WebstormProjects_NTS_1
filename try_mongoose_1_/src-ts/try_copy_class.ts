export {};

type Partx<T> = {
    [P in keyof T]: any;
};

interface Pet{

}
interface Person {
    fullName:string,age:number,pet:Pet
}
function fun1(v:Partx<Person>) {
}
fun1({fullName: 158, age:"wer", pet: undefined});

class Requiredx{
    theName:string;
    theAge:number;
    thePet:Pet;
}
class Parent extends Requiredx{
    static Required = Requiredx;
    theFav:any;
}

const parent = new Parent();
parent.theAge = 1;
parent.theFav = null;
