import {JSONx} from "./JsonPrune";

class Recursiver{
    x=new Recursiver();
}

setTimeout(()=>{
    console.log("hello");
},1000);
for (let i = 0; i < 999999; i++) {
    try{
        JSONx.logJsonDeep(new Recursiver());
    }catch (e) {
        //console.error(e);
    }
}
