"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils_1 = require("../common/DateUtils");
var mongoose = require('mongoose');
var CommonMongoose_1 = require("../common/CommonMongoose");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getYearStudyStart = function () {
        return this._yearStudyStart;
    };
    Object.defineProperty(User.prototype, "grade", {
        /**Học lớp mấy.*/
        get: function () {
            return DateUtils_1.appxNowYear - this._yearStudyStart;
        },
        set: function (grade) {
            this._yearStudyStart = DateUtils_1.appxNowYear - grade;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
(function (User) {
    User.schema = new mongoose.Schema(CommonMongoose_1.schemaFromTypeWithExclude({
        dateOfBirth: Date,
        fullName: String,
        passwordEncrypted: String,
        schoolName: String,
        userName: String,
        //yearStudyStart: Number
        grade: Number
    }));
    //region scemx
    User.MonModel = mongoose.model(User.name, User.schema);
    function buildDocPartial(v) { return new User.MonModel(v); }
    User.buildDocPartial = buildDocPartial;
    function buildDocExclude(v) { return new User.MonModel(v); }
    User.buildDocExclude = buildDocExclude;
    function buildDocExcluded(v) { return new User.MonModel(v); }
    User.buildDocExcluded = buildDocExcluded;
    function buildDoc(v) { return new User.MonModel(v); }
    User.buildDoc = buildDoc;
    function $buildExcluded(v) { return v; }
    User.$buildExcluded = $buildExcluded;
    //endregion
})(User = exports.User || (exports.User = {}));
exports.User = User;
//# sourceMappingURL=User.js.map