"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*export interface categories {
    math,physics,chemistry,biology,informatics,literature,english,
}*/
var Commons_1 = require("../../common/Commons");
/*export class Category {
    static math="math";
    static physics="physics";
    static chemistry="chemistry";
    static biology="biology";
    static informatics="informatics";
    static literature="literature";
    static english="english";
}*/
var Category;
(function (Category) {
    Category["math"] = "math";
    Category["physics"] = "physics";
    Category["chemistry"] = "chemistry";
    Category["biology"] = "biology";
    Category["informatics"] = "informatics";
    Category["literature"] = "literature";
    Category["english"] = "english";
})(Category = exports.Category || (exports.Category = {}));
(function (Category) {
    /*export function random():string {
        return randomPick(Object.keys(Category))
    }*/
    function random() {
        return Commons_1.randomPick(Object.keys(Category));
    }
    Category.random = random;
})(Category = exports.Category || (exports.Category = {}));
//# sourceMappingURL=Category.js.map