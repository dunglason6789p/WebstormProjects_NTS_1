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
var Commons_1 = require("../common/Commons");
var Mgoose_1 = require("../common/Mgoose");
var Question_1 = require("../model/Question");
var User_1 = require("../model/User");
var Answer_1 = require("../model/Answer");
var l = new Commons_1.MyLogger();
var mongoose = require('mongoose');
var fs = require('fs');
var util = require('util');
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);
(function topLevel() {
    return __awaiter(this, void 0, void 0, function () {
        var num, pathToDbInfoFile, _a, err_1;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    pathToDbInfoFile = "./dbInfo/dbinfo.txt";
                    _a = parseInt;
                    return [4 /*yield*/, readFileAsync(pathToDbInfoFile)];
                case 1:
                    num = _a.apply(void 0, [(_b.sent())]) + 1;
                    console.log("num=" + num);
                    return [4 /*yield*/, writeFileAsync(pathToDbInfoFile, num)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    mongoose.connect('mongodb://localhost/ndb' + num, { useNewUrlParser: true /*, useUnifiedTopology: true*/ })
                        .then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                        var user1_1, user2_1, question1_1, answer1, answer2, _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    console.log("connected to db...num=" + num);
                                    if (!true) return [3 /*break*/, 6];
                                    user1_1 = Commons_1.$create(User_1.User, {
                                        _id: new mongoose.Types.ObjectId(),
                                        userName: "user_1",
                                        passwordEncrypted: "111",
                                    });
                                    user2_1 = Commons_1.$create(User_1.User, {
                                        _id: new mongoose.Types.ObjectId(),
                                        userName: "user_2",
                                        passwordEncrypted: "222",
                                    });
                                    question1_1 = Commons_1.$createThenExec(Question_1.Question, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: undefined,
                                        title: "cau hoi 1",
                                        content: "noi dung cau hoi 1",
                                        tagList: ["a tag"]
                                    }, function (thiz) {
                                        thiz.setAuthor(user1_1);
                                    });
                                    answer1 = Commons_1.$createThenExec(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: undefined, questionId: undefined,
                                        content: "tra loi 1",
                                    }, function (thiz) {
                                        thiz.setAuthor(user1_1);
                                        thiz.setQuestion(question1_1, true);
                                    });
                                    answer2 = Commons_1.$createThenExec(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: undefined, questionId: undefined,
                                        content: "tra loi 2",
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                        thiz.setQuestion(question1_1, true);
                                    });
                                    //question1.addAnswers(answer1);
                                    _a = l;
                                    return [4 /*yield*/, User_1.User.buildDocExcluded(user1_1).save()];
                                case 1:
                                    //question1.addAnswers(answer1);
                                    _a.log = _f.sent();
                                    _b = l;
                                    return [4 /*yield*/, User_1.User.buildDocExcluded(user2_1).save()];
                                case 2:
                                    _b.log = _f.sent();
                                    _c = l;
                                    return [4 /*yield*/, Question_1.Question.buildDocExcluded(question1_1).save()];
                                case 3:
                                    _c.log = _f.sent();
                                    _d = l;
                                    return [4 /*yield*/, Answer_1.Answer.buildDocExcluded(answer1).save()];
                                case 4:
                                    _d.log = _f.sent();
                                    _e = l;
                                    return [4 /*yield*/, Answer_1.Answer.buildDocExcluded(answer2).save()];
                                case 5:
                                    _e.log = _f.sent();
                                    _f.label = 6;
                                case 6:
                                    Mgoose_1.Mgoose.find(Question_1.Question, {
                                        title: /hoi/i
                                    }, {
                                        populateSimple: ["author", "answerList"],
                                        lean: true,
                                    }).exec(function (err, questionResults) {
                                        console.log("[DEBUG]populateSimple():");
                                        for (var _i = 0, questionResults_1 = questionResults; _i < questionResults_1.length; _i++) {
                                            var questionResult = questionResults_1[_i];
                                            console.log("[INFO]a found <populateSimple()>:");
                                            //console.log(questionResult);
                                            var quest = questionResult;
                                            Commons_1.$logKeyValue(quest, true);
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
})(); //Execute top level async function.
