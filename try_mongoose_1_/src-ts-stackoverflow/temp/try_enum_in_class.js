/*
import {PostQuestion} from "../model/PostQuestion";

const abc = PostQuestion.FeaturedTypeEnumx.FORMULA;
console.log(abc);
*/
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');
//printImportant("INFO", 'This is a message');
console.log(LogLevel[LogLevel.ERROR]);
function onlyAcceptInSet(value) { return value; }
function onlyAcceptInSetWithDefault(value) {
    if (value === void 0) { value = "isGoood"; }
    return value;
}
console.log(onlyAcceptInSet("isGoood"));
console.log(onlyAcceptInSetWithDefault());
function abc(a, b, c) {
    if (c === void 0) { c = 1; }
}
// abc(/*b*/false,/*a*/"sdf");
abc("", null, 5);
//abc("",,5);
