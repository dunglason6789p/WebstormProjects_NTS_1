// First, define a type that, when passed a union of keys, creates an object which
// cannot have those properties. I couldn't find a way to use this type directly,
// but it can be used with the below type.
type Impossible<K extends keyof any> = {
    [P in K]: never;
};

// The secret sauce! Provide it the type that contains only the properties you want,
// and then a type that extends that type, based on what the caller provided
// using generics.
type NoExtraProperties<T, U extends T = T> = U & Impossible<Exclude<keyof U, keyof T>>;

// Now let's try it out!

// A simple type to work with
interface Animal {
    name: string;
    noise: string;
}

// This works, but I agree the type is pretty gross. But it might make it easier
// to see how this works.
//
// Whatever is passed to the function has to at least satisfy the Animal contract
// (the <T extends Animal> part), but then we intersect whatever type that is
// with an Impossible type which has only the keys on it that don't exist on Animal.
// The result is that the keys that don't exist on Animal have a type of `never`,
// so if they exist, they get flagged as an error!
function thisWorks<T extends Animal>(animal: T & Impossible<Exclude<keyof T, keyof Animal>>): void {
    console.log(`The noise that ${animal.name.toLowerCase()}s make is ${animal.noise}.`);
}

// This is the best I could reduce it to, using the NoExtraProperties<> type above.
// Functions which use this technique will need to all follow this formula.
function thisIsAsGoodAsICanGetIt<T extends Animal>(animal: NoExtraProperties<Animal, T>): void {
    console.log(`The noise that ${animal.name.toLowerCase()}s make is ${animal.noise}.`);
}

// It works for variables defined as the type
const okay: NoExtraProperties<Animal> = {
    name: 'Dog',
    noise: 'bark',
};

const wrong1: NoExtraProperties<Animal> = {
    name: 'Cat',
    noise: 'meow',
    //betterThanDogs: false, // look, an error!
};

// What happens if we try to bypass the "Excess Properties Check" done on object literals
// by assigning it to a variable with no explicit type?
const wrong2 = {
    name: 'Rat',
    noise: 'squeak',
    idealScenarios: ['labs', 'storehouses'],
    invalid: true,
};

thisWorks(okay);
thisWorks(wrong1); // doesn't flag it as an error here, but does flag it above
//thisWorks(wrong2); // yay, an error!

thisIsAsGoodAsICanGetIt(okay);
thisIsAsGoodAsICanGetIt(wrong1); // no error, but error above, so okay
//thisIsAsGoodAsICanGetIt(wrong2); // yay, an error!
