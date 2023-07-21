"use strict";
// Hello world type script
const sayHello = 'hello';
const person = {
    name: 'Huy',
    age: 28
};
const printMyNameAndAge = (name, age) => {
    console.log(`${sayHello} my name is ${name} and I am ${age}`);
};
printMyNameAndAge(person.name, person.age);
