export {}
class Person{
    get fullName(): string {
        console.log("get fullName");
        return this._fullName;
    }

    set fullName(value: string) {
        console.log("set fullName");
        this.weight = 69;
        this.funny = 12345;
        this._fullName = value;
    }
    private _fullName:string;
    age:number;
    weight:number;
    funny:number;
    defauut = 6789;
    func = (v:number)=>{return v*2};
    static $create(v){
        const p = new Person();
        return Object.assign(p,v);
    }
}

console.log(JSON.stringify(Person.$create({funny:-1,fullName:"ntson",age:15,extraa:50}),null,4));

