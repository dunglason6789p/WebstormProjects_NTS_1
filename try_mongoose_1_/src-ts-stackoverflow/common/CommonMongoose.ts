import {SchemaDefinition} from "mongoose";
import {AllPropName, SomePropName} from "./Commons";

export function schemaFromType<T>(value: AllPropName<T>): SchemaDefinition {
    return value as unknown as SchemaDefinition;
}

/**exclude props in Exclu.*/
export function schemaFromTypeWithExclude<T, Exclu extends SomePropName<T>>(value: Omit<AllPropName<T>, keyof Exclu>): SchemaDefinition {
    return value as unknown as SchemaDefinition;
}

/**exclude props in Exclu, then include props in Extraa.*/
export function schemaFromTypeWithExcludeThenInclude<T, Exclu extends SomePropName<T>, Extraa>(value: Omit<AllPropName<T>, keyof Exclu> & Extraa): SchemaDefinition {
    return value as unknown as SchemaDefinition;
}

/**optional version of `schemaFromType`*/
export function schemaFromTypePartial<T>(value: SomePropName<T>): SchemaDefinition {
    return value as unknown as SchemaDefinition;
}
