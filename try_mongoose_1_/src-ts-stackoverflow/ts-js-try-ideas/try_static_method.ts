class Dog{
    weight:number;
    fullName:string;
    isGood:boolean;
    static say(){}
    static build(v:Dog){Object.assign(this,v)}
    static buildPartial(v:Partial<Dog>){Object.assign(this,v)}
}

const dog1 = Dog.build({fullName: "", isGood: false, weight: 0});
console.log(dog1);

interface InterParent{
    psiMethod<T>(v:T);//{return v}
    //static smeth(v:any):any;
}
class ClassParent{
    static psiMethod<T>(v:T){return v}
    static psiMethodAny(v:any){return v}
}
class InterChild implements InterParent{
    psiMethod<T>(v: T) {
    }
}
class ClassChild extends ClassParent{
    static psiMethod<T>(v:T){return null}
    static psiMethodAny(v:{fullName:string,age:number}){return v}
}


class BuildDoc{
    static buildDoc(v:any):any{}
}
class Modall implements BuildDoc{

}
