const assert = require("assert");
const dog = require("./dog");
const person = require("./person");

console.clear();

assert.strictEqual(dog.name, "Lucky");
assert.strictEqual(dog.bark(), "woof! I'm Lucky!");
assert.strictEqual(person.name(), "John Bolton");
assert.strictEqual(person.ageThisYear(), 26);

console.log("👍");