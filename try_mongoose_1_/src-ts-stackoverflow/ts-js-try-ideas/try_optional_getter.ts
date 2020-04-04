class Persoon{
    get fullName(): string {
        return this._fullName;
    }
    set fullName(value: string) {
        this._fullName = value;
    }
    private _fullName:string;
    age:number;
    favorites:string[];
    children:any;
    sing(){}
    jump(){}
}
namespace Persoon{
    export interface GetterNames{
        age;
        favorites;
        jump;
    }
}
function accceptPropNamesOnly<T>(arr:(keyof T)[]) {return arr}
accceptPropNamesOnly<Persoon>(["fullName"]);

//v:Omit<T,keyof Exclu>

type SomePropX<T> = {
    [P in keyof T]?: any;
};
class G<X extends SomePropX<Persoon>>{
    theName:string;
}

class ShouExcl{
    age;
    favorites;
    jump;
}
function buildWithExcl(v:Omit<Persoon,keyof ShouExcl>){}
buildWithExcl({
    children: undefined,
    get fullName(): string {
        return "";
    },
    sing(): void {
    }
});
//function $buildWithExcl<T>(tipe:{new():T},v:Omit<T,keyof tipe.ShouExcl>){}

function buildWithExcl$<T,E>(v:Omit<T,keyof E>){}

buildWithExcl$<Persoon,Persoon.GetterNames>({
    children: undefined,
    get fullName(): string {
        return "";
    },
    sing(): void {
    }
});
