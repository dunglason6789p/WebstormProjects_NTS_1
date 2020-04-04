import {Question} from "../../model/Question";
import {Answer} from "../../model/Answer";

class WeirdClass{
    weird:string;
}

class Populate<T>{
    path:Extract<keyof T,string>;
    constructor(path:Extract<keyof T,string>) {
        this.path = path;
    }
}

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

class PopulateArray<T,P extends Partial<T>,ArrayItemType,ArrayFieldType extends Extract<keyof T,string>>{
    path:ArrayFieldType;
    value:P[keyof P];
    constructor(clazz:{new():T},path:P) {
        //this.path = path;
    }
}

function $a<T,P extends Partial<T>>(obj:T, defau:P):P[keyof P]{
    const key = Object.keys(defau)[0];
    if(obj[key]==null){
        obj[key] = defau[key]//OK even if `defau[key]==null`.
    }
    return obj[key]
}

const pop1
    = new PopulateArray(Question,{content:"asd"});
//pop1.value = 123;

const pop2
    = new PopulateArray(Question,{answerList:[]});
// pop2.value = 123;

class PopulateArray2<T>{
    constructor(clazz:{new():T},path:keyof T,nest:T[keyof T]) {
        //this.path = path;
    }
}
const pop3 = new PopulateArray2(Question,"author", new WeirdClass());

class PopulateArray3<T,R>{
    nest:Omit<T[keyof T], any|any[]>;
    constructor(clazz:{new():T},path:keyof T,nest:Omit<T[keyof T], any|any[]>) {
        this.nest=nest;
    }
}
const pop4 = new PopulateArray3(Question,"author", new WeirdClass());
const x4
    = pop4.nest;

// const t1:Extract<Question,Answer> = null;
type T0 = Exclude<"a" | "b" | "c" | 1, "a">;

class PopulateArray4<T,X extends keyof T>{
    nest:T[X];
}
const x2 = new PopulateArray4<Question,"answerList">();
const x2_nest = x2.nest;

type PropType<T,P extends keyof T> = T[P]
const prop1:PropType<Question,"answerList"> = [];

type ArrayItemType<A extends any[]> = A[0]
/**Type of item in array, only if the given type arg (A) is truly an array. If not, then the type is never. */
type ArrayItemTypeIf<A> = A extends (infer _ArrayItemType_)[]? _ArrayItemType_ : never

// const item1:ArrayItemType<PropType<Question, "answerList">> = 123;
const item1:ArrayItemType<PropType<Question, "answerList">> = new Answer();

class PopulateX<C,P extends keyof C>{
    path:P;
    typeCheck:C[P];
    constructor(clazz:{new():C},path:P) {
        this.path = path;
    }
}
const p2 = new PopulateX(Question,"author");
const p2_tc = p2.typeCheck;

class PopulateArrayX<C,P extends keyof C>{
    path:P;
    typeCheck:C[P] extends (infer _ArrayItemType_)[]? _ArrayItemType_ : C[P];
    constructor(clazz:{new():C},path:P) {
        this.path = path;
    }
}
const pA2 = new PopulateArrayX(Question,"answerList");
const pA2_tc = pA2.typeCheck;


class PopulateArrayX2<C,P extends keyof C>{
    path:P;
    typeCheck:ArrayItemTypeIf<C[P]>;
    keyOf_check:keyof ArrayItemTypeIf<C[P]>;
    constructor(clazz:{new():C},path:P) {
        this.path = path;
    }
}
const pA22 = new PopulateArrayX2(Question,"answerList");
const pA22_tc = pA22.typeCheck;
const pA22_koc = pA22.keyOf_check;
const pA22x = new PopulateArrayX2(Question,"author");
const pA22x_tc = pA22x.typeCheck;
