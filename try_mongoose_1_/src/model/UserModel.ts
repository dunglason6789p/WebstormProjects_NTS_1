// @ts-nocheck
import mongoose = require('mongoose');

export interface IUser extends mongoose.Document {
    name: string;
    age: number;
    somethingElse?: number;
}

export const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    age: {type:Number, required: true},
    somethingElse: Number,
});

class Lalala{
}
let sexy = new Lalala();
let oops = new sexy();

abstract class Gener<Pojo,Mong>{
    model: any;
    abstract meth(value:Partial<Pojo>):any;
    constructor(value:Partial<Pojo>) {
        this.meth(value);
    }
}
class GenerXuser extends Gener<IUser,UserModelX>{
    meth(value: Partial<IUser>) {
        this.model = new UserModelX();
    }
}

export const UserModelX = mongoose.model<IUser>('User', UserSchema);

export class UserModelXBuilder{
    readonly model:any;
    constructor(z:Partial<IUser>) {
        this.model = new UserModelX(z);
    }
}
