export {};
const mongoose = require('mongoose');
import {schemaOfType,nameof} from "../common/Commons";

class _Req {
    favName:string = "anonymouss";
}
export class Favourite extends _Req{
}
export namespace Favourite {
    export class R extends _Req{}
    export const schema = new mongoose.Schema(schemaOfType<Favourite.R>({
        favName: {type:String}
    }));
    const Model = mongoose.model(Favourite.name, Favourite.schema);
    export function build(v:Partial<Favourite>){return new Model(v);}
    export function buildAllProp(v:Favourite){return new Model(v);}
}
