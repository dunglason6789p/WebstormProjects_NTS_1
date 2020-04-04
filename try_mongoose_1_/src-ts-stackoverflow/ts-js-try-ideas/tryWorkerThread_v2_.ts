export {}
const { Worker } = require('worker_threads');
import {JSONx} from "../common/jsonPrune/JsonPrune";


class Recursiver{
    x=new Recursiver();
}



// language=JavaScript
const worker = new Worker(

`
const {parentPort} = require('worker_threads');
parentPort.once('message',
    message => parentPort.postMessage({pong: message}));
for (let i = 0; i < 999999; i++) {
    try{
        JSONx.logJsonDeep(new Recursiver());
    }catch (e){}
}
console.log("after loop.");
`
    , { eval: true });

worker.on('message', message => console.log("message="+message));
worker.on('exit', exitCode => console.log("exitCode="+exitCode));
setTimeout(()=>{
    worker.postMessage('ping');
},1500);
setTimeout(()=>{
    worker.terminate();
},3000);







setTimeout(()=>{
    console.log("hello");
},1000);

