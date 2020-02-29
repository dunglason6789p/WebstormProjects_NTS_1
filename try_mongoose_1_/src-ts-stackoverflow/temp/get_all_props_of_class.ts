export {}
class Car{
    fullName:string;
    wheel:number;
    isNew:boolean;
    defauut = 100;
    opt?:string;
    func:(v:string)=>void;
    funcDefauut = (v:number)=>{return v*2};
}
function getAllPropKey(tipe:any){
    try{
        const obj = new tipe();
        return Object.keys(obj);
    }catch (err) {
        console.log(err);
        return [];
    }
}
function getAllPropValue(tipe:any){
    try{
        const obj = new tipe();
        return Object.keys(obj).map(key => obj[key]);
    }catch (err) {
        console.log(err);
        return [];
    }
}
function logAllPropKeyValue(tipe:any){
    try{
        const obj = new tipe();
        console.log("[INFO]object key-value pairs:");
        console.log("{");
        for(let key of Object.keys(obj)){
            //.map(key => obj[key]);
            console.log(`    "${key}":${obj[key]}`);
        }
        console.log("}");
    }catch (err) {
        console.log(err);
    }
}

logAllPropKeyValue(Car);
