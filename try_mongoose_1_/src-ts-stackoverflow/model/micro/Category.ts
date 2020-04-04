/*export interface categories {
    math,physics,chemistry,biology,informatics,literature,english,
}*/
import {randomPick} from "../../common/Commons";

/*export class Category {
    static math="math";
    static physics="physics";
    static chemistry="chemistry";
    static biology="biology";
    static informatics="informatics";
    static literature="literature";
    static english="english";
}*/
export enum Category {
    math="math",
    physics="physics",
    chemistry="chemistry",
    biology="biology",
    informatics="informatics",
    literature="literature",
    english="english",
}
export namespace Category{
    /*export function random():string {
        return randomPick(Object.keys(Category))
    }*/
    export function random():Category {
        return randomPick(Object.keys(Category)) as Category
    }
}
