"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Question_1 = require("../model/Question");
var Commons_1 = require("../common/Commons");
var Mgoose_1 = require("../common/Mgoose");
var User_1 = require("../model/User");
var mongoose = require('mongoose');
mongoose.set('debug', true);
var l = new Commons_1.MyLogger();
mongoose.connect('mongodb://localhost/qaxt1', { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
    .then(function (r) { return __awaiter(void 0, void 0, void 0, function () {
    var user1, question1, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log("connected");
                if (!true) return [3 /*break*/, 3];
                user1 = User_1.User.buildDocExcluded({
                    _id: new mongoose.Types.ObjectId(),
                    userName: "ntson9x",
                    passwordEncrypted: "123",
                });
                question1 = Question_1.Question.buildDoc({
                    authorId: user1._id,
                    title: "cau hoi 1",
                    content: "noi dung cau hoi 1",
                    tagList: [
                        Commons_1.$build("a tag")
                    ],
                    commentList: [
                        Commons_1.$build({
                            content: "a comment"
                        })
                    ],
                    answerList: [
                        Commons_1.$build({
                            content: "a answer",
                        })
                    ]
                });
                _a = l;
                return [4 /*yield*/, user1.save()];
            case 1:
                _a.log = _c.sent();
                _b = l;
                return [4 /*yield*/, question1.save()];
            case 2:
                _b.log = _c.sent();
                _c.label = 3;
            case 3:
                Mgoose_1.Mgoose.findSimple(Question_1.Question, {
                    title: "cau hoi 1"
                }, null, null, function (err, questionResults) {
                    console.log("[DEBUG]findSimple():");
                    for (var _i = 0, questionResults_1 = questionResults; _i < questionResults_1.length; _i++) {
                        var questionResult = questionResults_1[_i];
                        console.log("[INFO]a found <findSimple()>:");
                        console.log(questionResult);
                    }
                });
                Mgoose_1.Mgoose.find(Question_1.Question, {
                    title: "cau hoi 1"
                }, {
                    populates: [{ path: ["author"], select: [Commons_1.$$("userName")] }]
                }).exec(function (err, questionResults) {
                    console.log("[DEBUG]find():");
                    for (var _i = 0, questionResults_2 = questionResults; _i < questionResults_2.length; _i++) {
                        var questionResult = questionResults_2[_i];
                        console.log("[INFO]a found <find()>:");
                        console.log(questionResult);
                    }
                });
                Mgoose_1.Mgoose.find(Question_1.Question, {
                    title: "cau hoi 1"
                }, {
                    populateSimple: ["author"]
                }).exec(function (err, questionResults) {
                    console.log("[DEBUG]populateSimple():");
                    for (var _i = 0, questionResults_3 = questionResults; _i < questionResults_3.length; _i++) {
                        var questionResult = questionResults_3[_i];
                        console.log("[INFO]a found <populateSimple()>:");
                        console.log(questionResult);
                    }
                });
                Mgoose_1.Mgoose.find(Question_1.Question, {
                    title: "cau hoi 1"
                }).populate({
                    path: "" + Commons_1.$$("author"),
                    select: "" + Commons_1.$$("userName")
                }).exec(function (err, questionResults) {
                    console.log("[DEBUG]populate():");
                    for (var _i = 0, questionResults_4 = questionResults; _i < questionResults_4.length; _i++) {
                        var questionResult = questionResults_4[_i];
                        console.log("[INFO]a found <populate()>:");
                        console.log(questionResult);
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
