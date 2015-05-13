var phrases = require('./en');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(phrases.Hello + ", " + who.name);
}

module.exports = User;

console.log(module);
console.log(exports);