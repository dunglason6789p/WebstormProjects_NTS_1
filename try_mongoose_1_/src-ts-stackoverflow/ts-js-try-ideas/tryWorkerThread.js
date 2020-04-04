"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Worker = require('worker_threads').Worker;
// language=JavaScript
var worker = new Worker("\nconst {parentPort} = require('worker_threads');\nparentPort.once('message',\n    message => parentPort.postMessage({pong: message}));\n", { eval: true });
worker.on('message', function (message) { return console.log(message); });
worker.on('exit', function (exitCode) { return console.log(exitCode); });
setTimeout(function () {
    worker.postMessage('ping');
}, 2000);
//# sourceMappingURL=tryWorkerThread.js.map