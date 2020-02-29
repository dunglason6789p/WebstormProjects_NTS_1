"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KnownClasses_1 = require("../common/KnownClasses");
var mongoose = require('mongoose');
var _a = mongoose.Schema.Types, Mixed = _a.Mixed, ObjectId = _a.ObjectId;
var Commons_1 = require("../common/Commons");
var Answer = /** @class */ (function () {
    function Answer() {
        this.featuredList = [];
        this.commentList = [];
    }
    Answer.prototype.setAuthor = function (author) {
        this.author = author;
        this.authorId = author._id;
    };
    Answer.prototype.setQuestion = function (question, autoBind) {
        if (autoBind === void 0) { autoBind = false; }
        this.question = question;
        this.questionId = question._id;
        if (autoBind) {
            this.question.addAnswers([this]);
        }
    };
    return Answer;
}());
exports.Answer = Answer;
(function (Answer) {
    Answer.schema = new mongoose.Schema(Commons_1.schemaFromTypeWithExclude({
        authorId: ObjectId,
        commentList: Mixed,
        content: String,
        featuredList: Mixed,
        questionId: ObjectId,
        tldr: String
    }), {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });
    Answer.schema.virtual(Commons_1.$$("author"), {
        ref: KnownClasses_1.$cn("User"),
        localField: Commons_1.$$("authorId"),
        foreignField: Commons_1.$$("_id"),
        justOne: true,
        options: { /*sort: { name: -1 }, limit: 5*/} // Query options, see http://bit.ly/mongoose-query-options
    });
    Answer.schema.virtual(Commons_1.$$("question"), {
        ref: KnownClasses_1.$cn("Question"),
        localField: Commons_1.$$("authorId"),
        foreignField: Commons_1.$$("_id"),
        justOne: true,
        options: { /*sort: { name: -1 }, limit: 5*/} // Query options, see http://bit.ly/mongoose-query-options
    });
    //region scemx
    Answer.MonModel = mongoose.model(Answer.name, Answer.schema);
    function buildDocPartial(v) { return new Answer.MonModel(v); }
    Answer.buildDocPartial = buildDocPartial;
    function buildDocExclude(v) { return new Answer.MonModel(v); }
    Answer.buildDocExclude = buildDocExclude;
    function buildDocExcluded(v) { return new Answer.MonModel(v); }
    Answer.buildDocExcluded = buildDocExcluded;
    function buildDoc(v) { return new Answer.MonModel(v); }
    Answer.buildDoc = buildDoc;
    function $buildExcluded(v) { return v; }
    Answer.$buildExcluded = $buildExcluded;
    //endregion
})(Answer = exports.Answer || (exports.Answer = {}));
exports.Answer = Answer;
