const dog = {
    name: "Lucky",
    bark: function(){
        return `woof! I'm ${this.name}!`;
    },    
}

module.exports = dog;