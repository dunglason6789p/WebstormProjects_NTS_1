"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question_1 = require("../../model/Question");
var PopulateArray = /** @class */ (function () {
    function PopulateArray(clazz, path, populateNested) {
        this.path = path;
        this.populateNested = populateNested;
    }
    return PopulateArray;
}());
var pa1 = new PopulateArray(Question_1.Question, "answerList", "author");
var pa2 = new PopulateArray(Question_1.Question, "author", "xxx123");
var PopulateObject = /** @class */ (function () {
    function PopulateObject(clazz, path, populateNested) {
        this.path = path;
        this.populateNested = populateNested;
    }
    return PopulateObject;
}());
var po1 = new PopulateObject(Question_1.Question, "author", "schoolName");
var Populate = /** @class */ (function () {
    function Populate(clazz, path, populateNested) {
        this.path = path;
        this.populateNested = populateNested;
    }
    return Populate;
}());
var p1 = new Populate(Question_1.Question, "author", "schoolName");
var p2 = new Populate(Question_1.Question, "answerList", "author");
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// const checkType:TypeOf__propOf_or_propOfItem<Car[], "cost"> = "123";
var PopulateMore = /** @class */ (function () {
    function PopulateMore(clazz, path, nest1, nest2, nest3) {
        this.path = path;
        this.nest1 = nest1;
        this.nest2 = nest2;
        this.nest3 = nest3;
    }
    return PopulateMore;
}());
var Favorite = /** @class */ (function () {
    function Favorite() {
    }
    return Favorite;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var StudyClass = /** @class */ (function () {
    function StudyClass() {
    }
    return StudyClass;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var School = /** @class */ (function () {
    function School() {
    }
    return School;
}());
var test = null;
test = new PopulateMore(School, "students", "studyClasses", "teachers", "favorites");
test = new PopulateMore(School, "students", "mainStudyClass", "teachers", "favorites");
test = new PopulateMore(School, "students", "studyClasses", "mainTeacher", "favorites");
test = new PopulateMore(School, "students", "studyClasses", "mainTeacher", "age");
test = new PopulateMore(School, "mainStudent", "studyClasses", "mainTeacher", "age");
test = new PopulateMore(School, "mainStudent", "mainStudyClass", "teachers", "age");
test = new PopulateMore(School, "mainStudent", "mainStudyClass", "mainTeacher", "favorites");
//# sourceMappingURL=TryType_Populate_v2_.js.map