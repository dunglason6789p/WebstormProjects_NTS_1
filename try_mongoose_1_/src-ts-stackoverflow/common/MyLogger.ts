export class MyLogger {
    static SKIP = "NTS::SKIP";
    static INFO = "[INFO]";
    static WARN = "[WARN]";
    static ERROR = "[ERROR]";
    static FATAL = "[FATAL]";
    static DEBUG = "[DEBUG]";
    static TRACE = "[TRACE]";
    private _log: any;
    set log(value: any) {
        console.log("================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.log(value);
        }
    }
    
    private _err: any;
    
    set logInfo(value: any) {
        console.error(MyLogger.INFO+"================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.error(value);
        }
    }
    set logWarn(value: any) {
        console.error(MyLogger.WARN+"================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.error(value);
        }
    }
    set logError(value: any) {
        console.error(MyLogger.ERROR+"================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.error(value);
        }
    }
    set logFatal(value: any) {
        console.error(MyLogger.FATAL+"================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.error(value);
        }
    }
    set logDebug(value: any) {
        console.error(MyLogger.DEBUG+"================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.error(value);
        }
    }
    set logTrace(value: any) {
        console.error(MyLogger.TRACE+"================================================================================================================");
        if (value != MyLogger.SKIP) {
            console.error(value);
        }
    }
}
