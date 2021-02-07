class Human {
  public name;
  public age;
  public gender;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const seol = new Human("jaehyeok", 28, "male");

const sayHello = (person: Human): string => {
  return `Hello, ${person.name}, you are ${person.age} years, you are a ${person.gender}`;
};

console.log(sayHello(seol));

export {};
