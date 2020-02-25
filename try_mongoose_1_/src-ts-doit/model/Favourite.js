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
var mongoose = require('mongoose');
var Commons_1 = require("../common/Commons");
var _Req = /** @class */ (function () {
    function _Req() {
        this.favName = "anonymouss";
    }
    return _Req;
}());
var Favourite = /** @class */ (function (_super) {
    __extends(Favourite, _super);
    function Favourite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Favourite;
}(_Req));
exports.Favourite = Favourite;
(function (Favourite) {
    var R = /** @class */ (function (_super) {
        __extends(R, _super);
        function R() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return R;
    }(_Req));
    Favourite.R = R;
    Favourite.schema = new mongoose.Schema(Commons_1.schemaOfType({
        favName: { type: String }
    }));
    var Model = mongoose.model(Favourite.name, Favourite.schema);
    function build(v) { return new Model(v); }
    Favourite.build = build;
    function buildAllProp(v) { return new Model(v); }
    Favourite.buildAllProp = buildAllProp;
})(Favourite = exports.Favourite || (exports.Favourite = {}));
exports.Favourite = Favourite;
