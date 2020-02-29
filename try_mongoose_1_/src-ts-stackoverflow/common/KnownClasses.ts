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
interface KnownClasses {
    Question
    Answer
    User
}
export function $cn(v:keyof KnownClasses):string{return v}
