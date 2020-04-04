"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question_1 = require("../../model/Question");
var Answer_1 = require("../../model/Answer");
var WeirdClass = /** @class */ (function () {
    function WeirdClass() {
    }
    return WeirdClass;
}());
var Populate = /** @class */ (function () {
    function Populate(path) {
        this.path = path;
    }
    return Populate;
}());
var PopulateArray = /** @class */ (function () {
    function PopulateArray(clazz, path) {
        //this.path = path;
    }
    return PopulateArray;
}());
function $a(obj, defau) {
    var key = Object.keys(defau)[0];
    if (obj[key] == null) {
        obj[key] = defau[key]; //OK even if `defau[key]==null`.
    }
    return obj[key];
}
var pop1 = new PopulateArray(Question_1.Question, { content: "asd" });
//pop1.value = 123;
var pop2 = new PopulateArray(Question_1.Question, { answerList: [] });
// pop2.value = 123;
var PopulateArray2 = /** @class */ (function () {
    function PopulateArray2(clazz, path, nest) {
        //this.path = path;
    }
    return PopulateArray2;
}());
var pop3 = new PopulateArray2(Question_1.Question, "author", new WeirdClass());
var PopulateArray3 = /** @class */ (function () {
    function PopulateArray3(clazz, path, nest) {
        this.nest = nest;
    }
    return PopulateArray3;
}());
var pop4 = new PopulateArray3(Question_1.Question, "author", new WeirdClass());
var x4 = pop4.nest;
var PopulateArray4 = /** @class */ (function () {
    function PopulateArray4() {
    }
    return PopulateArray4;
}());
var x2 = new PopulateArray4();
var x2_nest = x2.nest;
var prop1 = [];
// const item1:ArrayItemType<PropType<Question, "answerList">> = 123;
var item1 = new Answer_1.Answer();
var PopulateX = /** @class */ (function () {
    function PopulateX(clazz, path) {
        this.path = path;
    }
    return PopulateX;
}());
var p2 = new PopulateX(Question_1.Question, "author");
var p2_tc = p2.typeCheck;
var PopulateArrayX = /** @class */ (function () {
    function PopulateArrayX(clazz, path) {
        this.path = path;
    }
    return PopulateArrayX;
}());
var pA2 = new PopulateArrayX(Question_1.Question, "answerList");
var pA2_tc = pA2.typeCheck;
var PopulateArrayX2 = /** @class */ (function () {
    function PopulateArrayX2(clazz, path) {
        this.path = path;
    }
    return PopulateArrayX2;
}());
var pA22 = new PopulateArrayX2(Question_1.Question, "answerList");
var pA22_tc = pA22.typeCheck;
var pA22_koc = pA22.keyOf_check;
var pA22x = new PopulateArrayX2(Question_1.Question, "author");
var pA22x_tc = pA22x.typeCheck;
//# sourceMappingURL=TryType_Populate.js.map