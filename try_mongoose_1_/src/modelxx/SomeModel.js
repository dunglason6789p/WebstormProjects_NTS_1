"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// export interface ContactModel extends Model<IContact> {};
// @ts-ignore
var ContactModel = /** @class */ (function (_super) {
    __extends(ContactModel, _super);
    function ContactModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContactModel;
}(mongoose_1.Model));
exports.ContactModel = ContactModel;
;
var Contact = /** @class */ (function () {
    function Contact() {
        var schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String },
            message: { type: String },
            course_enquiry: { type: String },
            creation_date: { type: Date, default: Date.now }
        });
        this._model = mongoose_1.model('User', schema);
    }
    Object.defineProperty(Contact.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());
exports.Contact = Contact;
