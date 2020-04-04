// This works, but I agree the type is pretty gross. But it might make it easier
// to see how this works.
//
// Whatever is passed to the function has to at least satisfy the Animal contract
// (the <T extends Animal> part), but then we intersect whatever type that is
// with an Impossible type which has only the keys on it that don't exist on Animal.
// The result is that the keys that don't exist on Animal have a type of `never`,
// so if they exist, they get flagged as an error!
function thisWorks(animal) {
    console.log("The noise that " + animal.name.toLowerCase() + "s make is " + animal.noise + ".");
}
// This is the best I could reduce it to, using the NoExtraProperties<> type above.
// Functions which use this technique will need to all follow this formula.
function thisIsAsGoodAsICanGetIt(animal) {
    console.log("The noise that " + animal.name.toLowerCase() + "s make is " + animal.noise + ".");
}
// It works for variables defined as the type
var okay = {
    name: 'Dog',
    noise: 'bark',
};
var wrong1 = {
    name: 'Cat',
    noise: 'meow',
};
// What happens if we try to bypass the "Excess Properties Check" done on object literals
// by assigning it to a variable with no explicit type?
var wrong2 = {
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
//# sourceMappingURL=try_limit_property_inclass.js.map