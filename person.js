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

module.exports = person;