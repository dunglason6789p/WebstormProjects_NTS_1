"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var mongoose = require('mongoose');
var _a = mongoose.Schema.Types, Mixed = _a.Mixed, ObjectId = _a.ObjectId;
var Commons_1 = require("../common/Commons");
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());
exports.Comment = Comment;
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;
(function (Question) {
    Question.schema = new mongoose.Schema(Commons_1.schemaFromTypeWithExclude({
        answerList: Mixed,
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
        ref: User_1.User.name,
        localField: Commons_1.$$("authorId"),
        foreignField: '_id',
        // If `justOne` is true, 'members' will be a single doc as opposed to
        // an array. `justOne` is false by default.
        justOne: true,
        options: { /*sort: { name: -1 }, limit: 5*/} // Query options, see http://bit.ly/mongoose-query-options
    });
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
})(Question = exports.Question || (exports.Question = {}));
exports.Question = Question;
/*function buildit<T>(ModelType:Model<Document>,v:T){return new Model(v)}
buildit<Question>(Question.Modelx,{title: "thetitle"});
const que1 = new Question.Modelx({});
const que2 = Question.Modelx();*/
//Question.MonModel.find({title:"abc"},"",((err, res) => {}));
//const abc: Model<Document> = Question.MonModel;
