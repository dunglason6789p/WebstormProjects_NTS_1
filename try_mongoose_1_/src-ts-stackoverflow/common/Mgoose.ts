import {Document, Model} from "mongoose";
import {$$l3, Keyof_or_ItemKeyof, PropType_or_ItemPropType, SomePropName, ternaryLazy} from "./Commons";

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
    
    export type PopulateDeep<C,
        P0 extends keyof C,
        P1 extends Keyof_or_ItemKeyof<C[P0]>,
        P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
        P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
    >={
        path:P0;
        populate?:{
            path:P1;
            populate?:{
                path:P2;
                populate?:{
                    path:P3;
                }
            }
        }
    }
    
    export function populateDeepInfo<C,
        P0 = keyof C,
        //@ts-ignore
        P1 = Keyof_or_ItemKeyof<C[P0]>,
        //@ts-ignore
        P2 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
        //@ts-ignore
        P3 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
        >(
        populateInfo:{
            path:P0;
            populate?:{
                path:P1;
                populate?:{
                    path:P2;
                    populate?:{
                        path:P3;
                    }
                }
            }
        }
    ):{
        path:P0;
        populate?:{
            path:P1;
            populate?:{
                path:P2;
                populate?:{
                    path:P3;
                }
            }
        }
    }
    {
        return populateInfo
    }
    
    
    export function populateDeepInfoSimple<C,
        P0 = keyof C,
        //@ts-ignore
        P1 = Keyof_or_ItemKeyof<C[P0]>,
        //@ts-ignore
        P2 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
        //@ts-ignore
        P3 = Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
    >(path0:P0,path1?:P1,path2?:P2,path3?:P3):{
        path:P0;
        populate?:{
            path:P1;
            populate?:{
                path:P2;
                populate?:{
                    path:P3;
                }
            }
        }
    }
    {
        return {
            path:path0,
            populate:ternaryLazy(path1==null,undefined,()=>({
                path:path1,
                populate:ternaryLazy(path2==null,undefined,()=>({
                    path:path2,
                    populate:ternaryLazy(path3==null,undefined,()=>({
                        path:path3,
                    }))
                }))
            }))
        }
    }
    
    
    export function populateDeepInfoSimple2<C,
        P0 extends keyof C,
        P1 extends Keyof_or_ItemKeyof<C[P0]>,
        P2 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<C[P0],P1>>,
        P3 extends Keyof_or_ItemKeyof<PropType_or_ItemPropType<PropType_or_ItemPropType<C[P0],P1>,P2>>
    >(clazz:{new():C},path0:P0,path1?:P1,path2?:P2,path3?:P3):{
        path:string;
        populate?:{
            path:string;
            populate?:{
                path:string;
                populate?:{
                    path:string;
                }
            }
        }
    }
    {
        return {
            path:path0 as string,
            populate:ternaryLazy(path1==null,undefined,()=>({
                path:path1 as string,
                populate:ternaryLazy(path2==null,undefined,()=>({
                    path:path2 as string,
                    populate:ternaryLazy(path3==null,undefined,()=>({
                        path:path3 as string,
                    }))
                }))
            }))
        }
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

    export function find<T>(
        tipe:{new():T} & {MonModel:Model<Document>},
        conditions:SomePropName<T>,
        moreArgs?:{
            proj?:{incl?:Extract<keyof T, string>[],excl?:Extract<keyof T, string>[]},
            options?:MgooseQueryOptions,
            populateSimples?:Extract<keyof T, string>[],
            /**Example: `car=>car.costTotal.amountHigh`  will give the string: `"costTotal.amountHigh"`*/
            populateLambdas?:((t:T)=>any)[]
            populates?:{
                path:Extract<keyof T, string>,
                selects?:string[]
            }[],
            
            /**Raw populate. VD: `populateRaw_strings:["answer","author.fullName"]`*/
            populateRaw_strings?:string[],
            /**Raw populate. VD: `populateRaw_objects:[{path:...},{path:...}]`*/
            populateRaw_objects?:any[],
            /**Raw populate. Use string or object. See: https://mongoosejs.com/docs/populate.html <br>
             * Should use with function: `populateDeepInfo({...,{...}})` <br>
             * or function: `populateDeepInfoSimple(... , ... ,)`*/
            populate?:any,
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
            if(moreArgs.populateSimples != null){
                for (let propName of moreArgs.populateSimples) {
                    findQuery = findQuery.populate(propName);
                }
            }
            if(moreArgs.populateLambdas != null){
                for (let lambda of moreArgs.populateLambdas){
                    findQuery = findQuery.populate($$l3(lambda))
                }
            }
            if(moreArgs.populates != null) {
                for (let popinfo of moreArgs.populates) {
                    const truePopinfo:{path:string;select?} = {path:popinfo.path};
                    if(popinfo.selects!=null){
                        truePopinfo.select = popinfo.selects.join(" ");
                    }
                    findQuery = findQuery.populate(truePopinfo);
                }
            }
            if(moreArgs.populateRaw_strings != null){
                for (let str of moreArgs.populateRaw_strings) {
                    findQuery = findQuery.populate(str);
                }
            }
            if(moreArgs.populateRaw_objects != null){
                for (let obj of moreArgs.populateRaw_objects) {
                    findQuery = findQuery.populate(obj);
                }
            }
            if(moreArgs.populate != null){
                findQuery = findQuery.populate(moreArgs.populate);
            }
            if(moreArgs.lean===true){
                findQuery = findQuery.lean(true);
            }
        }
        if(callback!=null) {findQuery.exec(callback);return findQuery}
        return findQuery;
    }
}




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
