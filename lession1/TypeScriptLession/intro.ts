// Hello world type script

const sayHello: string = 'hello';

const person: {
  name: string;
  age: number;
} = {
  name: 'Huy',
  age: 28
};

const printMyNameAndAge = (name: string, age: number) => {
  console.log(`${sayHello} my name is ${name} and I am ${age}`);
};

printMyNameAndAge(person.name, person.age);

export {};