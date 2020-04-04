"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var _a = mongoose.Schema.Types, Mixed = _a.Mixed, ObjectId = _a.ObjectId;
var Commons_1 = require("../common/Commons");
var KnownClasses_1 = require("../common/KnownClasses");
var CommonMongoose_1 = require("../common/CommonMongoose");
var Question = /** @class */ (function () {
    function Question() {
        this.featuredList = [];
        this.tagList = [];
        this.commentList = [];
        this.answerList = [];
        this.answerIdList = [];
        this.upvote = 0;
        this.downvote = 0;
    }
    Question.prototype.setAuthor = function (author) {
        this.author = author;
        this.authorId = author._id;
    };
    Question.prototype.addAnswers = function (answerArr) {
        Commons_1.$array(this.answerList).pushAll(answerArr);
        for (var _i = 0, answerArr_1 = answerArr; _i < answerArr_1.length; _i++) {
            var a = answerArr_1[_i];
            this.answerIdList.push(a._id);
        }
    };
    return Question;
}());
exports.Question = Question;
(function (Question) {
    Question.schema = new mongoose.Schema(CommonMongoose_1.schemaFromTypeWithExclude({
        downvote: Number,
        upvote: Number,
        category: [String],
        answerIdList: [ObjectId],
        commentList: Mixed,
        content: String,
        featuredList: Mixed,
        tagList: Mixed,
        title: String,
        authorId: ObjectId
    }), {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });
    Question.schema.virtual(Commons_1.$$("author"), {
        ref: KnownClasses_1.$cn(KnownClasses_1.$package.model, "User"),
        localField: Commons_1.$$("authorId"),
        foreignField: Commons_1.$$("_id"),
        justOne: true,
        options: {}
    });
    Question.schema.virtual(Commons_1.$$("answerList"), {
        ref: KnownClasses_1.$cn(KnownClasses_1.$package.model, "Answer"),
        localField: Commons_1.$$("answerIdList"),
        foreignField: Commons_1.$$("_id"),
        justOne: false,
        options: {}
    });
    //region scemx
    Question.MonModel = mongoose.model(Question.name, Question.schema);
    function buildDocPartial(v) { return new Question.MonModel(v); }
    Question.buildDocPartial = buildDocPartial;
    function buildDocExclude(v) { return new Question.MonModel(v); }
    Question.buildDocExclude = buildDocExclude;
    function buildDocExcluded(v) { return new Question.MonModel(v); }
    Question.buildDocExcluded = buildDocExcluded;
    function buildDoc(v) { return new Question.MonModel(v); }
    Question.buildDoc = buildDoc;
    function $buildExcluded(v) { return v; }
    Question.$buildExcluded = $buildExcluded;
    function $buildNewExcluded(v) { return Object.assign(new Question(), v); }
    Question.$buildNewExcluded = $buildNewExcluded;
    //endregion
})(Question = exports.Question || (exports.Question = {}));
exports.Question = Question;
//# sourceMappingURL=Question.js.map