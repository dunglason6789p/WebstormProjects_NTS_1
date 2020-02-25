import {User} from "./User";

export {};
const mongoose = require('mongoose');
const {Mixed,ObjectId} = mongoose.Schema.Types;
import {
    $$,
    schemaFromType,
    schemaFromTypeWithExclude, SomePropName,
} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
export class Comment {
    content:string;
    replyList?:Comment[];
}
export class Answer {
    content:string;
    commentList?:Comment[];
}
export class Question implements Mgoose.POJO {
    _id?:any;
    title:string;
    content?:string;
    featuredList?:{type:"formula"|"image",content:string}[];
    tagList?:string[];
    commentList?:Comment[];
    answerList?:Answer[];
    author?:User;
    authorId:any;
}
export namespace Question {
    export const schema = new mongoose.Schema(schemaFromTypeWithExclude<Question,{author}>({
        answerList: Mixed,
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
        ref: User.name, // The model to use
        localField: $$<Question>("authorId"), // Find people where `localField`
        foreignField: '_id', // is equal to `foreignField`
        justOne: true,// If `justOne` is true, 'members' will be a single doc as opposed toan array. `justOne` is false by default.
        options: { /*sort: { name: -1 }, limit: 5*/ } // Query options, see http://bit.ly/mongoose-query-options
    });
    //region scemx
    export const MonModel = mongoose.model(Question.name, Question.schema);
    export function buildDocPartial(v:Partial<Question>){return new MonModel(v);}
    export function buildDocExclude<E extends {[P in keyof Question]?:any;}>(v:Omit<Question,keyof E>){return new MonModel(v);}
    export function buildDocExcluded(v:Omit<Question,keyof Excl>){return new MonModel(v);}
    export function buildDoc(v:Question){return new MonModel(v);}
    export function $buildExcluded(v:Omit<Question,keyof Excl>){return v}
    export interface Excl{}
    //endregion
}
