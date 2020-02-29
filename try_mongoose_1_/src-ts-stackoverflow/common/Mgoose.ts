import {Document, Model} from "mongoose";
import {SomePropName} from "./Commons";

export namespace Mgoose{
    export interface POJO {
        _id?:any;
    }
    export class MgooseQueryOptions{
        static $build(v:MgooseQueryOptions) {Object.assign(this,v);}
        static $buildPartial(v:Partial<MgooseQueryOptions>) {Object.assign(this,v);}
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
    }
    export function findSimple<T>(
        tipe:{new():T} & {MonModel:Model<Document>},
        conditions:SomePropName<T>,
        proj?:{incl?:Extract<keyof T, string>[],excl?:Extract<keyof T, string>[]},
        options?:MgooseQueryOptions,
        callback?:(err:any,docs:any)=>any)
    {
        return tipe.MonModel.find(
            conditions,
            proj!=null?
                proj.incl!=null?
                    proj.incl.join(' ')
                    :proj.excl!=null?
                        '-'+proj.excl.join(' -')
                        :null
                :null,
            options,
            callback);
    }
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
    export function find<T>(
        tipe:{new():T} & {MonModel:Model<Document>},
        conditions:SomePropName<T>,
        moreArgs?:{
            proj?:{incl?:Extract<keyof T, string>[],excl?:Extract<keyof T, string>[]},
            options?:MgooseQueryOptions,
            populateSimple?:Extract<keyof T, string>[],
            populates?:{
                path:Extract<keyof T, string>[],
                select?:any[]
            }[],
            lean?:boolean
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
            if(moreArgs.populateSimple != null){
                for (let propName of moreArgs.populateSimple) {
                    findQuery = findQuery.populate(propName);
                }
            }else if(moreArgs.populates != null) {
                for (let popinfo of moreArgs.populates) {
                    const truePopinfo:{path;select?} = {path:popinfo.path.join(" ")};
                    if(popinfo.select!=null){
                        truePopinfo.select = popinfo.select.join(" ");
                    }
                    findQuery = findQuery.populate(truePopinfo);
                }
            }
            if(moreArgs.lean===true){
                findQuery = findQuery.lean(true);
            }
        }
        if(callback!=null) {findQuery.exec(callback);return findQuery}
        return findQuery;
    }
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
}




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
