// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utilis");
const data = require("./6-alternative");

require("./7-mind-grenade");
console.log(data);

console.log(names);

sayHi(names.rahul);
