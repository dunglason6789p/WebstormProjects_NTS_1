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
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var Person = mongoose.model('Person', new mongoose_1.Schema({
    name: String,
    occupation: String,
    age: Number,
    likes: String
}));
var TQuery = /** @class */ (function (_super) {
    __extends(TQuery, _super);
    function TQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TQuery;
}(mongoose_1.Query));
// With a JSON doc
Person.
    find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
}).
    limit(10).
    sort({ occupation: -1 }).
    select({ name: 1, occupation: 1 }).
    exec(function (err, res) {
});
// Using query builder
Person.
    find({ occupation: /host/ }).
    where('name.last').equals('Ghost').
    where('age').gt(17).lt(66).
    where('likes').in(['vaporizing', 'talking']).
    limit(10).
    sort('-occupation').
    select('name occupation').
    exec(function (err, res) {
});
