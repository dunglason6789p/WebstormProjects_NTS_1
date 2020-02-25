"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctrler_1 = require("./Ctrler");
// within some class, this is called..
// @ts-ignore
var contact = new Ctrler_1.DB.Models.Contact({
    // @ts-ignore
    name: req.body.name,
    // @ts-ignore
    email: req.body.email,
    // @ts-ignore
    phone: req.body.phone,
    // @ts-ignore
    message: req.body.message,
    // @ts-ignore
    course_enquiry: req.body.course_enquiry
});
contact.save(function (err) {
    if (err) {
        // @ts-ignore
        return next(err);
    }
    // @ts-ignore
    res.status(200).json({ result: "success" });
});
