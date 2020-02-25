"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../model/Employee");
var employee1 = Employee_1.Employee.build({
    firstName: "Son",
    lastName: "Nguyen"
});
employee1.save();
