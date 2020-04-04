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
export namespace $package {
    /**For package `model`*/
    export class model{
        Question;
        Answer;
        User;
    }
}
/**Class names in given package.*/
export function $cn<T>(tipe:{new():T}, v:Extract<keyof T,string>):string{
    return v;
}

//const tryName = $cn2($package.model,"Question");
//console.log(tryName);
