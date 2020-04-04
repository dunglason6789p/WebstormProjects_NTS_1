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
var JsonPrune_1 = require("../common/jsonPrune/JsonPrune");
require('source-map-support').install();
var Commons_1 = require("../common/Commons");
var Mgoose_1 = require("../common/Mgoose");
var Question_1 = require("../model/Question");
var User_1 = require("../model/User");
var Answer_1 = require("../model/Answer");
var UUID_1 = require("../common/UUID");
var Category_1 = require("../model/micro/Category");
var populateDeepInfoSimple2 = Mgoose_1.Mgoose.populateDeepInfoSimple2;
var MyLogger_1 = require("../common/MyLogger");
var l = new MyLogger_1.MyLogger();
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
                        var newUUID, userList, user1_1, user2_1, user3_1, questionList, question1_1, question2_1, question3_1, question4_1, question5, answerList, answer1_1, answer1_2, answer2_1, answer2_2, answer3_1, answer3_2, answer3_3, answer4_1, answer4_2, _i, userList_1, user, _a, _b, questionList_1, question, _c, _d, answerList_1, answer, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    console.log("connected to db...num=" + num);
                                    if (!true) return [3 /*break*/, 12];
                                    newUUID = 1;
                                    userList = [];
                                    newUUID = UUID_1.genUUID();
                                    user1_1 = Commons_1.$create(User_1.User, {
                                        _id: new mongoose.Types.ObjectId(),
                                        userName: "user_" + newUUID,
                                        grade: newUUID,
                                        passwordEncrypted: "pass_" + newUUID,
                                    });
                                    userList.push(user1_1);
                                    newUUID = UUID_1.genUUID();
                                    user2_1 = Commons_1.$create(User_1.User, {
                                        _id: new mongoose.Types.ObjectId(),
                                        userName: "user_" + newUUID,
                                        grade: newUUID,
                                        passwordEncrypted: "pass_" + newUUID,
                                    });
                                    userList.push(user2_1);
                                    newUUID = UUID_1.genUUID();
                                    user3_1 = Commons_1.$create(User_1.User, {
                                        _id: new mongoose.Types.ObjectId(),
                                        userName: "user_" + newUUID,
                                        grade: newUUID,
                                        passwordEncrypted: "pass_" + newUUID,
                                    });
                                    userList.push(user3_1);
                                    questionList = [];
                                    newUUID = UUID_1.genUUID();
                                    question1_1 = Commons_1.$createAndDo(Question_1.Question, {
                                        _id: new mongoose.Types.ObjectId(),
                                        title: "quest title " + newUUID,
                                        content: "quest content " + newUUID,
                                        authorId: Commons_1.initLater(),
                                        category: [Category_1.Category.random()]
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                    });
                                    questionList.push(question1_1);
                                    newUUID = UUID_1.genUUID();
                                    question2_1 = Commons_1.$createAndDo(Question_1.Question, {
                                        _id: new mongoose.Types.ObjectId(),
                                        title: "quest title " + newUUID,
                                        content: "quest content " + newUUID,
                                        authorId: Commons_1.initLater(),
                                        category: [Category_1.Category.random()]
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                    });
                                    questionList.push(question2_1);
                                    newUUID = UUID_1.genUUID();
                                    question3_1 = Commons_1.$createAndDo(Question_1.Question, {
                                        _id: new mongoose.Types.ObjectId(),
                                        title: "quest title " + newUUID,
                                        content: "quest content " + newUUID,
                                        authorId: Commons_1.initLater(),
                                        category: [Category_1.Category.random()]
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                    });
                                    questionList.push(question3_1);
                                    newUUID = UUID_1.genUUID();
                                    question4_1 = Commons_1.$createAndDo(Question_1.Question, {
                                        _id: new mongoose.Types.ObjectId(),
                                        title: "quest title " + newUUID,
                                        content: "quest content " + newUUID,
                                        authorId: Commons_1.initLater(),
                                        category: [Category_1.Category.random()]
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                    });
                                    questionList.push(question4_1);
                                    newUUID = UUID_1.genUUID();
                                    question5 = Commons_1.$createAndDo(Question_1.Question, {
                                        _id: new mongoose.Types.ObjectId(),
                                        title: "quest title " + newUUID,
                                        content: "quest content " + newUUID,
                                        authorId: Commons_1.initLater(),
                                        category: [Category_1.Category.random()]
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                    });
                                    questionList.push(question5);
                                    answerList = [];
                                    newUUID = UUID_1.genUUID();
                                    answer1_1 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                        thiz.setQuestion(question1_1, true);
                                    });
                                    answerList.push(answer1_1);
                                    newUUID = UUID_1.genUUID();
                                    answer1_2 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user3_1);
                                        thiz.setQuestion(question1_1, true);
                                    });
                                    answerList.push(answer1_2);
                                    newUUID = UUID_1.genUUID();
                                    answer2_1 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user1_1);
                                        thiz.setQuestion(question2_1, true);
                                    });
                                    answerList.push(answer2_1);
                                    newUUID = UUID_1.genUUID();
                                    answer2_2 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user1_1);
                                        thiz.setQuestion(question2_1, true);
                                    });
                                    answerList.push(answer2_2);
                                    newUUID = UUID_1.genUUID();
                                    answer3_1 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                        thiz.setQuestion(question3_1, true);
                                    });
                                    answerList.push(answer3_1);
                                    newUUID = UUID_1.genUUID();
                                    answer3_2 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user3_1);
                                        thiz.setQuestion(question3_1, true);
                                    });
                                    answerList.push(answer3_2);
                                    newUUID = UUID_1.genUUID();
                                    answer3_3 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user1_1);
                                        thiz.setQuestion(question3_1, true);
                                    });
                                    answerList.push(answer3_3);
                                    newUUID = UUID_1.genUUID();
                                    answer4_1 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user1_1);
                                        thiz.setQuestion(question4_1, true);
                                    });
                                    answerList.push(answer4_1);
                                    newUUID = UUID_1.genUUID();
                                    answer4_2 = Commons_1.$createAndDo(Answer_1.Answer, {
                                        _id: new mongoose.Types.ObjectId(),
                                        authorId: Commons_1.initLater(),
                                        questionId: Commons_1.initLater(),
                                        content: "answer content " + newUUID,
                                    }, function (thiz) {
                                        thiz.setAuthor(user2_1);
                                        thiz.setQuestion(question4_1, true);
                                    });
                                    answerList.push(answer4_2);
                                    _i = 0, userList_1 = userList;
                                    _f.label = 1;
                                case 1:
                                    if (!(_i < userList_1.length)) return [3 /*break*/, 4];
                                    user = userList_1[_i];
                                    _a = l;
                                    return [4 /*yield*/, User_1.User.buildDocExcluded(user).save()];
                                case 2:
                                    _a.log = _f.sent();
                                    _f.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    _b = 0, questionList_1 = questionList;
                                    _f.label = 5;
                                case 5:
                                    if (!(_b < questionList_1.length)) return [3 /*break*/, 8];
                                    question = questionList_1[_b];
                                    _c = l;
                                    return [4 /*yield*/, Question_1.Question.buildDocExcluded(question).save()];
                                case 6:
                                    _c.log = _f.sent();
                                    _f.label = 7;
                                case 7:
                                    _b++;
                                    return [3 /*break*/, 5];
                                case 8:
                                    _d = 0, answerList_1 = answerList;
                                    _f.label = 9;
                                case 9:
                                    if (!(_d < answerList_1.length)) return [3 /*break*/, 12];
                                    answer = answerList_1[_d];
                                    _e = l;
                                    return [4 /*yield*/, Answer_1.Answer.buildDocExcluded(answer).save()];
                                case 10:
                                    _e.log = _f.sent();
                                    _f.label = 11;
                                case 11:
                                    _d++;
                                    return [3 /*break*/, 9];
                                case 12:
                                    Mgoose_1.Mgoose.find(Question_1.Question, {
                                    //answerIdList:{$size:{$gt:1}}
                                    }, {
                                        //populateSimples:["author","answerList"],//GOOD.
                                        //populateLambdas:[question=>question.answerList[0].author],
                                        /*populate:{
                                            path: 'answerList',
                                            // Get friends of friends - populate the 'friends' array for every friend
                                            populate: { path: 'author' }
                                        },*/
                                        // populateRaw_strings:["answerList","answerList.author"],
                                        populateRaw_objects: [
                                            populateDeepInfoSimple2(Question_1.Question, "author"),
                                            populateDeepInfoSimple2(Question_1.Question, "answerList", "author"),
                                        ],
                                        lean: true,
                                    }).exec(function (err, questionResults) {
                                        if (err) {
                                            l.logError = err;
                                        }
                                        if (questionResults) {
                                            console.log("[DEBUG]populateSimple():");
                                            for (var _i = 0, questionResults_1 = questionResults; _i < questionResults_1.length; _i++) {
                                                var questionResult = questionResults_1[_i];
                                                console.log("[INFO]a found <populateSimple()>:");
                                                //console.log(questionResult);
                                                var quest = questionResult;
                                                //$logKeyValue(quest,true);
                                                JsonPrune_1.JSONx.logJsonDeep(quest, 2, ["id", "_id"]);
                                            }
                                        }
                                        else {
                                            console.log("[DEBUG]questionResults=" + questionResults);
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
//# sourceMappingURL=CtrlerTwo.js.map