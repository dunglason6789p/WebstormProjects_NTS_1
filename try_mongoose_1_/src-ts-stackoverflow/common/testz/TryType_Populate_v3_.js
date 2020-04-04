"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../Commons");
var JsonPrune_1 = require("../jsonPrune/JsonPrune");
var logJsonDeep = JsonPrune_1.JSONx.logJsonDeep;
var PopulateDeep = /** @class */ (function () {
    function PopulateDeep(clazz, path, nest1, nest2, nest3) {
        this.path = path;
        this.nest1 = nest1;
        this.nest2 = nest2;
        this.nest3 = nest3;
    }
    return PopulateDeep;
}());
function populateDeep(clazz, path0, path1, path2, path3) {
    return {
        path: path0,
        populate: Commons_1.ternaryLazy(path1 == null, undefined, function () { return ({
            path: path1,
            populate: Commons_1.ternaryLazy(path2 == null, undefined, function () { return ({
                path: path2,
                populate: Commons_1.ternaryLazy(path3 == null, undefined, function () { return ({
                    path: path3,
                }); })
            }); })
        }); })
    };
}
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
var test1 = populateDeep(School, "students", "studyClasses", "teachers", "favorites");
console.log(test1);
logJsonDeep(test1);
function populateDeeper(clazz, populateInfo) {
    return populateInfo;
}
var test2 = populateDeeper(School, {
    path: "students",
    populate: {
        path: "studyClasses",
    }
});
function populateDeeper2(populateInfo) {
    return populateInfo;
}
var test3 = populateDeeper2({
    path: "mainStudent",
    populate: {
        path: "studyClasses",
    }
});
function populateDeepInfoSimple(path0, path1, path2, path3) {
    return {
        path: path0,
        populate: Commons_1.ternaryLazy(path1 == null, undefined, function () { return ({
            path: path1,
            populate: Commons_1.ternaryLazy(path2 == null, undefined, function () { return ({
                path: path2,
                populate: Commons_1.ternaryLazy(path3 == null, undefined, function () { return ({
                    path: path3,
                }); })
            }); })
        }); })
    };
}
/*
const testX1
    = populateDeepInfoSimple<School>("students","sdf")*/
//# sourceMappingURL=TryType_Populate_v3_.js.map