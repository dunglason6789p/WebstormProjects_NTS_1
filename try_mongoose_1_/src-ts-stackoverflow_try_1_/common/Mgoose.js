"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    /*export function find<T>(
        tipe:{new():T} & {MonModel:Model<Document>},
        conditions:SomePropName<T>,
        moreArgs?:{
            proj?:{incl?:Extract<keyof T, string>[],excl?:Extract<keyof T, string>[]},
            options?:MgooseQueryOptions,
            populates?:Extract<keyof T, string>[],
        },
        callback?:(err:any,docs:any)=>any
    ){
        let findQuery =  tipe.MonModel.find(conditions,null);
        if(moreArgs != null) {
            if(moreArgs.proj != null){
                if(moreArgs.proj.incl != null){
                    findQuery = findQuery.select(moreArgs.proj.incl.join(' '));
                }else if(moreArgs.proj.excl != null){
                    findQuery = findQuery.select(moreArgs.proj.excl.join(' -'));
                }
            }
            if(moreArgs.populates != null) {
                for (let propName of moreArgs.populates) {
                    findQuery = findQuery.populate(propName);
                }
            }
        }
        if(callback!=null) return findQuery.exec(callback);
        return findQuery;
    }*/
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
            if (moreArgs.populateSimple != null) {
                for (var _i = 0, _a = moreArgs.populateSimple; _i < _a.length; _i++) {
                    var propName = _a[_i];
                    findQuery = findQuery.populate(propName);
                }
            }
            else if (moreArgs.populates != null) {
                for (var _b = 0, _c = moreArgs.populates; _b < _c.length; _b++) {
                    var popinfo = _c[_b];
                    var truePopinfo = { path: popinfo.path.join(" ") };
                    if (popinfo.select != null) {
                        truePopinfo.select = popinfo.select.join(" ");
                    }
                    findQuery = findQuery.populate(truePopinfo);
                }
            }
        }
        if (callback != null) {
            findQuery.exec(callback);
            return findQuery;
        }
        return findQuery;
    }
    Mgoose.find = find;
    /*export function find2<T>(
        tipe:{new():T} & {MonModel:Model<Document>},
        conditions:SomePropName<T>,
        proj?:{incl?:Extract<keyof T, string>[],excl?:Extract<keyof T, string>[]},
        options?:MgooseQueryOptions,
        callback?:(err:any,docs:any)=>any)
    {
        let query = tipe.MonModel.find(conditions);
        if(proj!=null){
            query = query.select(todo);
        }
        if(op)
    }*/
})(Mgoose = exports.Mgoose || (exports.Mgoose = {}));
/*
//All QUERY OPTIONS: (See: https://mongoosejs.com/docs/api.html#query_Query-setOptions)
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
