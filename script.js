const assert = require("assert")

const dog = {
    name: "Lucky",
    bark: function(){
        return `woof! I'm ${this.name}!`;
    },    
}

const person = {
    firstName: "John",
    lastName: "Bolton",
    name: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    birthYear: "1994",
    ageThisYear: function(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    },
}

const someString = "Hi how are you?"

console.log(dog.name);
assert.strictEqual(dog.name, "Lucky");
console.log(dog.bark());
assert.strictEqual(dog.bark(), "woof! I'm Lucky!");
console.log(person.name());
assert.strictEqual(person.name(), "John Bolton");
console.log(person.ageThisYear);
assert.strictEqual(person.ageThisYear(), 26);
console.log(someString);
assert.strictEqual(someString, "Hi how are you?");
console.log("length of string: " + someString.length);
assert.strictEqual(someString.length, 15)

console.log("👍");