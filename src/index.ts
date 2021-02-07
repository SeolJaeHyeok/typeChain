const sayHello = (name: string, age: number, gender: string): string => {
  return `Hello, ${name}, you are ${age} years, you are a ${gender}`;
};

console.log(sayHello("Seol", 44, "male"));

export {};
