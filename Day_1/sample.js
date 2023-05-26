//JS Regular Function

function f(a, b) {
  const sum = a + b;
  return sum;
}

console.log(f(20, 30));

//Anonymous Function

const fun = function (a, b) {
  const sum = a + b;
  return sum;
};
console.log(fun(10, 20));

//Immediately Involked Function Expression

/*
You can create a function and immediately execute it in Javascript.
Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. 
For example, another developer can immediately see that sum can't be used anywhere outside the function body.
*/

const res = (function (a, b) {
  const sum = a + b;
  return sum;
})(10, 100);

console.log(res);

//Function within functions

/*
A powerful feature of JavaScript is you can actually create functions within other functions and even return them!
*/

function createFunction() {
  function innerFun(a, b) {
    const sum = a + b;
    return sum;
  }
  return innerFun;
}

const fn = createFunction();
console.log(fn(1, 4));

//Function Hoisting

/*
JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. 
You can only do this if you declare functions with the function syntax.
*/
function outer() {
  return inner;
  function inner(a, b) {
    const sum = a + b;
    return sum;
  }
}

const func = outer();
console.log(func(1, 9));

//Closures

/*
 When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. 
 The combination of the function and its enviroment is called a closure.
*/

function outerFunction(a) {
  function innerFunction(b) {
    const sum = a + b;
    return sum;
  }
  return innerFunction;
}

const invokeFn = outerFunction(50);
console.log(invokeFn(5));

/*
outerFunction passes the first parameter a and the innerFunction has access to it. 
This way, outerFunction serves as a factory of new functions, with each returned function having different behavior.
*/

//Arrow Syntax - In fact, on many projects, it is the preferred syntax.

const arrowSum = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(arrowSum(4, 16));

//Features

/*
Omit Return
-----------
If you can write the code in a single line, you can omit the return keyword. This can result in very short code.
*/

const arrowSum1 = (a, b) => a + b;
console.log(arrowSum1(10, 30));

/*
Differences
There are 3 major differences between arrow syntax and function syntax.

1)More minimalistic syntax. This is especially true for anonymous functions and single-line functions. For this reason, this way is generally preferred when passing short anonymous functions to other functions.
2)No automatic hoisting. You are only allowed to use the function after it was declared. This is generally considered a good thing for readability.
3)Can't be bound to this, super, and arguments or be used as a constructor. These are all complex topics in themselves but the basic takeaway should be that arrow functions are simpler in their feature set. 
*/

//Rest Argument - You can use rest syntax to access all the passed arguments as an array.

const restArgSample = (...args) => {
  const sum = args[0] + args[1];
  return sum;
};

console.log(restArgSample(1, 2));
//variable args is [1, 2]

//Spread Syntax

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log([...arr1, ...arr2]);

function add(...args) {
  console.log(args[0] + args[1]);
}

add(...arr2);

//Higher Order Function

/* 
A function that accepts a function and/or returns a function is called a higher-order function
*/

function log(inputFunction) {
  return function (...args) {
    console.log(`Input : ${args}`);
    const result = inputFunction(...args);
    console.log(`Output : ${result}`);
    return result;
  };
}

const invFn = log((a, b) => a + b);
invFn(5, 95);
