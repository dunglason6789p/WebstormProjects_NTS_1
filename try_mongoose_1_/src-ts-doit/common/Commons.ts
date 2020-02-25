import {SchemaDefinition} from "mongoose";
type AllPropName<T> = {
    [P in keyof T]: any;
};
export function schemaOfType<T>(value:AllPropName<T>):SchemaDefinition{
    return value as unknown as SchemaDefinition;
}
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

