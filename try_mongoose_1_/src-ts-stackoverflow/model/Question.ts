import {User} from "./User";

export {};
const mongoose = require('mongoose');
const {Mixed,ObjectId} = mongoose.Schema.Types;
import {
    $$, $array, schemaFromType, schemaFromTypeWithExclude, SomePropName
} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
import {$cn} from "../common/KnownClasses";
import {Answer} from "./Answer";

export class Question implements Mgoose.POJO {
    _id?:any;
    title:string;
    content?:string;
    featuredList?:{type:"formula"|"image",content:string}[]=[];
    tagList?:string[]=[];
    commentList?:Comment[]=[];
    answerList?:Answer[]=[];
    answerIdList?:any[]=[];
    author?:User;
    authorId:any;
    setAuthor?(author:User){
        this.author = author;
        this.authorId = author._id;
    }
    addAnswers?(answerArr:Answer[]){
        $array(this.answerList).pushAll(answerArr);
        for(let a of answerArr){
            this.answerIdList.push(a._id);
        }
    }
}
export namespace Question {
    export const schema = new mongoose.Schema(schemaFromTypeWithExclude<Question,{author,answerList}>({
        answerIdList:[ObjectId],
        commentList: Mixed,
        content: String,
        featuredList: Mixed,
        tagList: Mixed,
        title: String,
        authorId: ObjectId
    }),{
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });
    schema.virtual($$<Question>("author"), {
        ref: $cn("User"),
        localField: $$<Question>("authorId"),
        foreignField: $$<User>("_id"),
        justOne: true,
        options: {}
    });
    schema.virtual($$<Question>("answerList"), {
        ref: $cn("Answer"),
        localField: $$<Question>("answerIdList"),
        foreignField: $$<Answer>("_id"),
        justOne: false,
        options: {}
    });
    //region scemx
    export const MonModel = mongoose.model(Question.name, Question.schema);
    export function buildDocPartial(v:Partial<Question>){return new MonModel(v);}
    export function buildDocExclude<E extends {[P in keyof Question]?:any;}>(v:Omit<Question,keyof E>){return new MonModel(v);}
    export function buildDocExcluded(v:Omit<Question,keyof Excl>){return new MonModel(v);}
    export function buildDoc(v:Question){return new MonModel(v);}
    export function $buildExcluded(v:Omit<Question,keyof Excl>){return v}
    export function $buildNewExcluded(v:Omit<Question,keyof Excl>){return Object.assign(new Question(),v);}
    export type Excluded = Omit<Question,keyof Excl>;//TODO
    export interface Excl{}
    //endregion
}
