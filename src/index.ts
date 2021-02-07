import { StringDecoder } from "string_decoder";

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Seol",
  age: 22,
  gender: "male",
};

const sayHello = (person: Human): string => {
  return `Hello, ${person.name}, you are ${person.age} years, you are a ${person.gender}`;
};

console.log(sayHello(person));

export {};
