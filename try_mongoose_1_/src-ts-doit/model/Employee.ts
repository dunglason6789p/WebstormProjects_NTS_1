export {};
const mongoose = require('mongoose');
import {schemaOfType,nameof} from "../common/Commons";
import {Favourite} from "./Favourite";

class _Req {
    age: number;
    favorites:Favourite[];
    firstName: string;
    lastName: string;
    opt?:number;
}
export class Employee extends _Req{
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
    opt:number;
}
export namespace Employee {
    export class R extends _Req{}
    export const schema = new mongoose.Schema(schemaOfType<Employee.R>({
        age: {type:Number,required:true},
        favorites: {},
        firstName: {},
        lastName: {},
    }));
    const Model = mongoose.model(Employee.name, Employee.schema);
    export function build(v:Partial<Employee>){return new Model(v);}
    export function buildAllProp(v:Employee){return new Model(v);}
}
