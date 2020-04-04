"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commons_1 = require("./Commons");
var Mgoose;
(function (Mgoose) {
    var MgooseQueryOptions = /** @class */ (function () {
        function MgooseQueryOptions() {
        }
        MgooseQueryOptions.$build = function (v) { Object.assign(this, v); };
        MgooseQueryOptions.$buildPartial = function (v) { Object.assign(this, v); };
        return MgooseQueryOptions;
    }());
    Mgoose.MgooseQueryOptions = MgooseQueryOptions;
    function populateDeepInfo(populateInfo) {
        return populateInfo;
    }
    Mgoose.populateDeepInfo = populateDeepInfo;
    function populateDeepInfoSimple(path0, path1, path2, path3) {
        return {
            path: path0,
            populate: Commons_1.ternaryLazy(path1 == null, undefined, function () { return ({
                path: path1,
                populate: Commons_1.ternaryLazy(path2 == null, undefined, function () { return ({
                    path: path2,
                    populate: Commons_1.ternaryLazy(path3 == null, undefined, function () { return ({
                        path: path3,
                    }); })
                }); })
            }); })
        };
    }
    Mgoose.populateDeepInfoSimple = populateDeepInfoSimple;
    function populateDeepInfoSimple2(clazz, path0, path1, path2, path3) {
        return {
            path: path0,
            populate: Commons_1.ternaryLazy(path1 == null, undefined, function () { return ({
                path: path1,
                populate: Commons_1.ternaryLazy(path2 == null, undefined, function () { return ({
                    path: path2,
                    populate: Commons_1.ternaryLazy(path3 == null, undefined, function () { return ({
                        path: path3,
                    }); })
                }); })
            }); })
        };
    }
    Mgoose.populateDeepInfoSimple2 = populateDeepInfoSimple2;
    function findSimple(tipe, conditions, proj, options, callback) {
        return tipe.MonModel.find(conditions, proj != null ?
            proj.incl != null ?
                proj.incl.join(' ')
                : proj.excl != null ?
                    '-' + proj.excl.join(' -')
                    : null
            : null, options, callback);
    }
    Mgoose.findSimple = findSimple;
    function find(tipe, conditions, moreArgs, callback) {
        var findQuery = tipe.MonModel.find(conditions, null);
        if (moreArgs != null) {
            if (moreArgs.proj != null) {
                if (moreArgs.proj.incl != null) {
                    findQuery = findQuery.select(moreArgs.proj.incl.join(' '));
                }
                else if (moreArgs.proj.excl != null) {
                    findQuery = findQuery.select(moreArgs.proj.excl.join(' -'));
                }
            }
            if (moreArgs.populateSimples != null) {
                for (var _i = 0, _a = moreArgs.populateSimples; _i < _a.length; _i++) {
                    var propName = _a[_i];
                    findQuery = findQuery.populate(propName);
                }
            }
            if (moreArgs.populateLambdas != null) {
                for (var _b = 0, _c = moreArgs.populateLambdas; _b < _c.length; _b++) {
                    var lambda = _c[_b];
                    findQuery = findQuery.populate(Commons_1.$$l3(lambda));
                }
            }
            if (moreArgs.populates != null) {
                for (var _d = 0, _e = moreArgs.populates; _d < _e.length; _d++) {
                    var popinfo = _e[_d];
                    var truePopinfo = { path: popinfo.path };
                    if (popinfo.selects != null) {
                        truePopinfo.select = popinfo.selects.join(" ");
                    }
                    findQuery = findQuery.populate(truePopinfo);
                }
            }
            if (moreArgs.populateRaw_strings != null) {
                for (var _f = 0, _g = moreArgs.populateRaw_strings; _f < _g.length; _f++) {
                    var str = _g[_f];
                    findQuery = findQuery.populate(str);
                }
            }
            if (moreArgs.populateRaw_objects != null) {
                for (var _h = 0, _j = moreArgs.populateRaw_objects; _h < _j.length; _h++) {
                    var obj = _j[_h];
                    findQuery = findQuery.populate(obj);
                }
            }
            if (moreArgs.populate != null) {
                findQuery = findQuery.populate(moreArgs.populate);
            }
            if (moreArgs.lean === true) {
                findQuery = findQuery.lean(true);
            }
        }
        if (callback != null) {
            findQuery.exec(callback);
            return findQuery;
        }
        return findQuery;
    }
    Mgoose.find = find;
})(Mgoose = exports.Mgoose || (exports.Mgoose = {}));
/* DO NOT DELETE!
//===========================All QUERY OPTIONS: (See: https://mongoosejs.com/docs/api.html#query_Query-setOptions)===========================
//The following options are for all operations:
collation?:any;
session?:any;
explain?:any;
//The following options are only for find():
tailable?:any;
sort?:any;
limit?:any;
skip?:any;
maxscan?:any;
batchSize?:any;
comment?:any;
snapshot?:any;
readPreference?:any;
hint?:any;
//The following options are only for find(), findOne(), findById(), findOneAndUpdate(), and findByIdAndUpdate():
lean?:any;
populate?:any;
projection?:any;
//The following options are only for write operations: update(), updateOne(), updateMany(), replaceOne(), findOneAndUpdate(), and findByIdAndUpdate():
upsert?:any;
writeConcern?:any;
timestamps?:any;
omitUndefined?:any;
//The following options are only for all operations except update(), updateOne(), updateMany(), remove(), deleteOne(), and deleteMany():
maxTimeMS?:any;
//The following options are for findOneAndUpdate() and findOneAndRemove()
useFindAndModify?:any;
rawResult?:any;
*/
//# sourceMappingURL=Mgoose.js.map