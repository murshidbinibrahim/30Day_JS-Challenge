//closure way

function createCounter(init) {
  let count = init;
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function reset() {
    count = init;
    return count;
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

//class way

class Counter {
  constructor(init) {
    this.init = init;
    this.currentCount = init;
  }

  increment() {
    this.currentCount += 1;
    return this.currentCount;
  }

  decrement() {
    this.currentCount -= 1;
    return this.currentCount;
  }

  reset() {
    this.currentCount = this.init;
    return this.currentCount;
  }
}

const counterObj = new Counter(10);
console.log(counterObj.increment());
console.log(counterObj.reset());
console.log(counterObj.decrement());

/* 
In the given context, the this keyword refers to the current instance of the Counter class. It is used to access and modify the instance variables and methods within the class.

In the constructor function, this.init and this.currentCount refer to the instance variables init and currentCount respectively. When an object is created from the Counter class using the new keyword (e.g., const counterObj = new Counter(10);), the this keyword inside the constructor refers to the newly created object, and the init parameter passed to the constructor is assigned to this.init, initializing the instance variable.

The increment(), decrement(), and reset() methods also use the this keyword to refer to the current instance of the class. For example, this.currentCount += 1; increments the currentCount instance variable by 1. By using this.currentCount, the method modifies the specific instance's currentCount value.

When you call the methods on the counterObj instance, such as counterObj.increment(), counterObj.reset(), and counterObj.decrement(), the this keyword inside these methods refers to the counterObj instance, allowing you to access and manipulate its specific instance variables.

In summary, the this keyword is used to refer to the current instance of the class, enabling access and modification of its instance variables and methods.
*/

/*

What is instance and instance variable?

In object-oriented programming, an instance refers to a specific occurrence or realization of a class. A class is a blueprint or template that defines the structure and behavior of objects, whereas an instance is a concrete, individual object created from that class.

When you create an object from a class, it is called an instance of that class. Each instance has its own set of instance variables, also known as instance fields or member variables. Instance variables hold the state or data unique to each instance of a class.

In the provided code example: const counterObj = new Counter(10);

counterObj is an instance of the Counter class. It is created using the new keyword and the constructor of the class. This instance has its own separate set of instance variables.

In the Counter class, init and currentCount are instance variables. The init variable is initialized with the value passed to the constructor, and currentCount is initially set to the same value. Each instance of the Counter class will have its own copy of these variables, independent of other instances.

Instance variables are accessed and modified using the this keyword, which refers to the current instance of the class. For example, this.init and this.currentCount are used to refer to the instance variables within the class methods.

Instances and their associated instance variables allow you to create multiple objects that maintain their own individual states. Each instance can have different values for its instance variables, making them useful for representing unique data and behavior for each object created from a class.

*/
