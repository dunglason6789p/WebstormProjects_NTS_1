"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    Object.defineProperty(MyLogger.prototype, "log", {
        set: function (value) {
            console.log("================================================================================================================");
            if (value != MyLogger.SKIP) {
                console.log(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyLogger.prototype, "logError", {
        set: function (value) {
            console.error("================================================================================================================");
            if (value != MyLogger.SKIP) {
                console.error(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MyLogger.SKIP = "NTS::SKIP";
    MyLogger.INFO = "[INFO]";
    MyLogger.WARN = "[WARN]";
    MyLogger.ERROR = "[ERROR]";
    MyLogger.FATAL = "[FATAL]";
    MyLogger.DEBUG = "[DEBUG]";
    MyLogger.TRACE = "[TRACE]";
    return MyLogger;
}());
exports.MyLogger = MyLogger;
//# sourceMappingURL=MyLogger.js.map