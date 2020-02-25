import {SchemaDefinition} from "mongoose";
type AllPropName<T> = {
    [P in keyof T]: any;
};
type SomePropName<T> = {
    [P in keyof T]?: any;
};
export function schemaOfType<T>(value:AllPropName<T>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
/**exclude props in Exclu.*/
export function schemaOfTypeWithExclude<T,Exclu extends SomePropName<T>>(value:Omit<AllPropName<T>,keyof Exclu>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
/**exclude props in Exclu, then include props in Extraa.*/
export function schemaOfTypeWithExcludeThenInclude<T,Exclu extends SomePropName<T>,Extraa>(value:Omit<AllPropName<T>,keyof Exclu> & Extraa):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
//function aaa(v:Omit)

export const nameof = <T>(name: Extract<keyof T, string>): string => name;
//export const nameof2 = <T>(name: Extract<T, string>): string => name;

class ATest{
    aPropx;
}
const theName1 = nameof<ATest>("aPropx");
const theName1b = nameof<{ATest}>("ATest");
// const theName2 = nameof2<ATest>("aPropx");

const nameofFactory = <T>() => (name: keyof T) => name;
const theName3 = nameofFactory<ATest>();
console.log(theName3);

class Company{
    fullName:string;
    age:number;
    isGood:boolean;
}

const x1 = schemaOfTypeWithExclude<Company,{"isGood"/*,"age"*/}>({
    age: 0,
    fullName: ""
});

const x2 = schemaOfTypeWithExcludeThenInclude<Company,{"isGood"/*,"age"*/},{"isBad"}>({
    isBad: undefined,
    age: 0,
    fullName: ""
});
