import {ternaryLazy, whenEqual} from "../Commons";

const x = 2;
whenEqual(x,{value:0,fun:()=>{}});

whenEqual(x,{value:0,fun:()=>{}});

whenEqual(x,
    {value:0,fun:()=>{
    }},{value:0,fun:()=>{
    }}
);

whenEqual(
    x,
    {
        value:0,
        fun:()=>{
        
        }
    }
);

whenEqual(
    x,
    {value:0,fun:()=>{
        
        }
    }
);

const xxx = {
    [(1==1)+""]:111,
    [(2==2)+""]:222
};
console.log(xxx);
const tern1 = ternaryLazy(1==1,()=>2,()=>3);
console.log(tern1);
// const tern2 = ternaryLazy(false,()=>2,()=>3);
const tern2 = ternaryLazy(false,undefined,()=>3);
console.log(tern2);
console.log(ternaryLazy(true,null,null));
console.log(ternaryLazy(false,null,null));
console.log(ternaryLazy(true,undefined,null));
console.log(ternaryLazy(false,null,undefined));
