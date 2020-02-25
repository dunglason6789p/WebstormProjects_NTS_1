/*
import {PostQuestion} from "../model/PostQuestion";

const abc = PostQuestion.FeaturedTypeEnumx.FORMULA;
console.log(abc);
*/



enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}
/**
 * This is equivalent to: type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');
//printImportant("INFO", 'This is a message');
console.log(LogLevel[LogLevel.ERROR]);

function onlyAcceptInSet(value:"isGoood"|"isBaad"){return value}
function onlyAcceptInSetWithDefault(value:"isGoood"|"isBaad"="isGoood"){return value}

console.log(onlyAcceptInSet("isGoood"));
console.log(onlyAcceptInSetWithDefault());

function abc(a:string,b:boolean,c:number=1){}
// abc(/*b*/false,/*a*/"sdf");
abc("",null,5);
//abc("",,5);
