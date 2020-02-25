import {Employee} from "../model/Employee";

const employee1 = Employee.build({
    firstName: "Son",
    lastName: "Nguyen"
});

employee1.save();
