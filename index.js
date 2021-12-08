console.log('Hellow from node.js...');

const Person = require('./person');

console.log(person.name);

const person1 = new Person('John Doe', 30)

person1.greeting();
