import {appxNowYear} from "../common/DateUtils";
const mongoose = require('mongoose');

import {Mgoose} from "../common/Mgoose";
import {schemaFromType, schemaFromTypeWithExclude} from "../common/CommonMongoose";
export class User implements Mgoose.POJO{
    _id?: any;
    userName:string;
    passwordEncrypted:string;
    fullName?:string;
    dateOfBirth?:Date;
    schoolName?:string;
    private _yearStudyStart?:number;
    getYearStudyStart?(): number {
        return this._yearStudyStart;
    }
    /**Học lớp mấy.*/
    get grade(): number {
        return appxNowYear-this._yearStudyStart;
    }
    set grade(grade:number) {
        this._yearStudyStart = appxNowYear-grade;
    }
}
export namespace User {
    export const schema = new mongoose.Schema(schemaFromTypeWithExclude<User,{}>({
        dateOfBirth: Date,
        fullName: String,
        passwordEncrypted: String,
        schoolName: String,
        userName: String,
        //yearStudyStart: Number
        grade:Number
    }));
    //region scemx
    export const MonModel = mongoose.model(User.name, User.schema);
    export function buildDocPartial(v:Partial<User>){return new MonModel(v);}
    export function buildDocExclude<E extends {[P in keyof User]?:any;}>(v:Omit<User,keyof E>){return new MonModel(v);}
    export function buildDocExcluded(v:Omit<User,keyof Excl>){return new MonModel(v);}
    export function buildDoc(v:User){return new MonModel(v);}
    export function $buildExcluded(v:Omit<User,keyof Excl>){return v}
    export interface Excl{grade;yearStudyStart}
    //endregion
}
