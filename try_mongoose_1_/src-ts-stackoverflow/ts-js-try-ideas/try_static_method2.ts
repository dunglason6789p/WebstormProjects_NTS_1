import {mustImpStatMethFrom} from "../common/Commons";
// import {mustImpStatMethFrom2} from "../common/Commons";

/* static interface declaration */
interface ComparableStatic<T> {
    compare(a: T, b: T): number;
}
@mustImpStatMethFrom<ComparableStatic<TableCell>>()
class TableCell {
    static compare(a: TableCell, b: TableCell): number {
        return 123;
    }
}
interface SomeMore{
    dosth(v:string):boolean;
    dosthElse(v:string):boolean;
}
@mustImpStatMethFrom<ComparableStatic<TableCell>>()
@mustImpStatMethFrom<SomeMore>()
class ClassTwo {
    static compare(a: TableCell, b: TableCell): number {
        return 123;
    }
    static dosth(v:string){return false}
    static dosthElse(v:string){return false}
}
