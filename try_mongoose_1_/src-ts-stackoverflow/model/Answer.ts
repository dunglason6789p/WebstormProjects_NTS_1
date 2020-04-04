import {$package, $cn} from "../common/KnownClasses";

const mongoose = require('mongoose');
const {Mixed,ObjectId} = mongoose.Schema.Types;
import {
    $$,SomePropName
} from "../common/Commons";
import {Mgoose} from "../common/Mgoose";
import {Question} from "./Question";
import {User} from "./User";
import {schemaFromType, schemaFromTypeWithExclude} from "../common/CommonMongoose";
export class Answer implements Mgoose.POJO {
    _id?:any;
    tldr?:string;
    content:string;
    featuredList?:{type:"formula"|"image",content:string}[]=[];
    commentList?:Comment[]=[];
    question?:Question;
    questionId:any;
    author?:User;
    authorId:any;
    upvote?:number=0;
    downvote?:number=0;
    setAuthor?(author:User){
        this.author = author;
        this.authorId = author._id;
    }
    setQuestion?(question:Question,autoBind:boolean=false){
        this.question = question;
        this.questionId = question._id;
        if(autoBind){
            this.question.addAnswers([this]);
        }
    }
}
export namespace Answer {
    export const schema = new mongoose.Schema(schemaFromTypeWithExclude<Answer,{_id}>({
        downvote: Number,
        upvote: Number,
        authorId: ObjectId,
        commentList: Mixed,
        content: String,
        featuredList: Mixed,
        questionId: ObjectId,
        tldr: String
    }),{
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });
    schema.virtual($$<Answer>("author"), {
        ref: $cn($package.model,"User"), // The model to use
        localField: $$<Answer>("authorId"), // Find people where `localField`
        foreignField: $$<User>("_id"), // is equal to `foreignField`
        justOne: true,// If `justOne` is true, 'members' will be a single doc as opposed toan array. `justOne` is false by default.
        options: { /*sort: { name: -1 }, limit: 5*/ } // Query options, see http://bit.ly/mongoose-query-options
    });
    schema.virtual($$<Answer>("question"), {
        ref: $cn($package.model,"Question"), // The model to use
        localField: $$<Answer>("authorId"), // Find people where `localField`
        foreignField: $$<Question>("_id"), // is equal to `foreignField`
        justOne: true,// If `justOne` is true, 'members' will be a single doc as opposed toan array. `justOne` is false by default.
        options: { /*sort: { name: -1 }, limit: 5*/ } // Query options, see http://bit.ly/mongoose-query-options
    });
    //region scemx
    export const MonModel = mongoose.model(Answer.name, Answer.schema);
    export function buildDocPartial(v:Partial<Answer>){return new MonModel(v);}
    export function buildDocExclude<E extends {[P in keyof Answer]?:any;}>(v:Omit<Answer,keyof E>){return new MonModel(v);}
    export function buildDocExcluded(v:Omit<Answer,keyof Excl>){return new MonModel(v);}
    export function buildDoc(v:Answer){return new MonModel(v);}
    export function $buildExcluded(v:Omit<Answer,keyof Excl>){return v}
    export interface Excl{_id}
    //endregion
}
