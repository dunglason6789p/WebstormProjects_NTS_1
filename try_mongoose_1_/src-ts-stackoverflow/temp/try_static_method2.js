"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("../common/Commons");
var TableCell = /** @class */ (function () {
    function TableCell() {
    }
    TableCell.compare = function (a, b) {
        return 123;
    };
    TableCell = __decorate([
        Commons_1.mustImpStatMethFrom()
    ], TableCell);
    return TableCell;
}());
var ClassTwo = /** @class */ (function () {
    function ClassTwo() {
    }
    ClassTwo.compare = function (a, b) {
        return 123;
    };
    ClassTwo.dosth = function (v) { return false; };
    ClassTwo.dosthElse = function (v) { return false; };
    ClassTwo = __decorate([
        Commons_1.mustImpStatMethFrom(),
        Commons_1.mustImpStatMethFrom()
    ], ClassTwo);
    return ClassTwo;
}());
