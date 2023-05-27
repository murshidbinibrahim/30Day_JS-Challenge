//Object

/*
Objects are just mappings from strings to other values. 
The values can be anything: strings, functions, other objects, etc. 
The string that maps to the value is called the key.
*/

const object = {
  num: 1,
  str: "Hello World",
  obj: {
    x: 10,
  },
};

//Accessing values in object

// 1. Dot Notation

const value = object.obj.x;

console.log(value);

// 2. Bracket Notation - This is used when the key isn't valid variable name

console.log(object["obj"]["x"]);

// 3. Destructuring Syntax - This is most useful when accessing multiple values at once.

const { num, str } = object;
console.log(num, str);

//Classes and Prototypes

//The classes's constructor returns an object which is an instance of that class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`My Name Is ${this.name}`);
  }
}

const devMK = new Person("Murshid", 25);
devMK.greet();

/*
JavaScript implements classes with special objects call prototypes. 
All the methods (in this case greet) are functions stored on the object's prototype.
*/

const person = {
  name: "Murshid",
  age: 25,
  __proto__: {
    greet: function () {
      console.log(`--My Name Is ${this.name}--`);
    },
  },
};

person.greet();

/* How can you access the greet method even though it's not a key on the alice object"? 
The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. 
There is actually an algorithm that traverse the prototype chain. First, JavaScript looks at the keys on the object. 
If the requested key wasn't found, it then looks on the keys of the prototype object. 
If it still wasn't found, it looks at the prototype's prototype, and so on. This is how inheritance is implemented in JavaScript!*/
