"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Worker = require('worker_threads').Worker;
var Recursiver = /** @class */ (function () {
    function Recursiver() {
        this.x = new Recursiver();
    }
    return Recursiver;
}());
// language=JavaScript
var worker = new Worker("\nconst {parentPort} = require('worker_threads');\nparentPort.once('message',\n    message => parentPort.postMessage({pong: message}));\nfor (let i = 0; i < 999999; i++) {\n    try{\n        JSONx.logJsonDeep(new Recursiver());\n    }catch (e){}\n}\nconsole.log(\"after loop.\");\n", { eval: true });
worker.on('message', function (message) { return console.log("message=" + message); });
worker.on('exit', function (exitCode) { return console.log("exitCode=" + exitCode); });
setTimeout(function () {
    worker.postMessage('ping');
}, 1500);
setTimeout(function () {
    worker.terminate();
}, 3000);
setTimeout(function () {
    console.log("hello");
}, 1000);
//# sourceMappingURL=tryWorkerThread_v2_.js.map