export {}
const { Worker } = require('worker_threads');

// language=JavaScript
const worker = new Worker(
    
    `
const {parentPort} = require('worker_threads');
parentPort.once('message',
    message => parentPort.postMessage({pong: message}));
`
    , { eval: true });

worker.on('message', message => console.log(message));
worker.on('exit', exitCode => console.log(exitCode));
setTimeout(()=>{
    worker.postMessage('ping');
},2000);
