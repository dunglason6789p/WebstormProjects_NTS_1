"use strict";
// import {Question} from "../model/Question";
// import {Answer} from "../model/Answer";
// import {User} from "../model/User";
// export const KnownClasses = {
//     Question,
//     Answer,
//     User,
// };
// /**NTS: Type safe class name.*/
// export function $cn(v:keyof typeof KnownClasses){return v}
Object.defineProperty(exports, "__esModule", { value: true });
//When you dont need type safe:
//export function $cn(v:string){return v}
//When you just need loose type safe:
/*interface KnownClasses {
    Question
    Answer
    User
}
export function $cn(v:keyof KnownClasses):string{return v}*/
/**Class names*/
var $package;
(function ($package) {
    /**For package `model`*/
    var model = /** @class */ (function () {
        function model() {
        }
        return model;
    }());
    $package.model = model;
})($package = exports.$package || (exports.$package = {}));
/**Class names in given package.*/
function $cn(tipe, v) {
    return v;
}
exports.$cn = $cn;
//const tryName = $cn2($package.model,"Question");
//console.log(tryName);
//# sourceMappingURL=KnownClasses.js.map