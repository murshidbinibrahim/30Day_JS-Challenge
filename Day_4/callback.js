/* Callback - A callback is defined as a function passed as an argument to another function.

Why Use Callbacks

The simple answer is they allow you to write code that can be reused across different use-cases.

This particular question asks to reimplement the Array.map method, 
which is one of the most heavily used array methods in JavaScript. 
However, there are four small differences.

1. Array.map is a method on the Array prototype. This implementation accepts the array as the 1st argument.
2. The callback provided to Array.map passes a reference to the original array as the 3rd argument. 
    This implementation's callback only accepts two arguments.
3. Array.map optionally allows you pass a thisArg as the 2nd parameter. If provided, the passed callback will be bound to that context 
    (assuming the callback isn't an arrow function as they can't be bound).
4. Array.map is required to handle sparse arrays. For example, if you write code let arr = Array(100); arr[1] = 1;, Array.map will only look at index 1.

*/

//Performance Benchmarks

//Approach 1: Write Values onto Initially Empty Array

/*  In JavaScript, you can read and write to indices that aren't in the range [0, arr.length). 
    Just like with normal objects, accessing an index that doesn't exist returns undefined. 
    Writing to an index that doesn't exist is generally discouraged because, besides being confusing, it can result in slow and unpredictable performance. 
*/

const arr = [1, 2, 3];
function fn(element) {
  return element + 1;
}

var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

console.log("One ", map(arr, fn));

// This approach takes ~250ms for 5M elements.

//Approach 2: For...in Loop

/*  
    For...in loops are more commonly used to iterate over the keys on an object. 
    However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays. 
    For example, if you wrote let arr = Array(100); arr[1] = 10;, this approach would only transform the single element. 
*/

var map = function (arr, fn) {
  const newArr = new Array(arr.length);
  for (const i in arr) {
    newArr[i] = fn(arr[i], Number(i));
  }
  return newArr;
};

console.log("Two ", map(arr, fn));

//This approach takes ~1000ms for 5M elements.

//Approach 3: Push Values onto Array

/* 
JavaScript arrays are confusingly named because traditionally arrays have a fixed sized. 
However in JavaScript arrays can have elements appended with an average O(1)O(1)O(1) time. 
You can build up a transformed array by appending each element to the end one-by-one.
*/

var map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};
console.log("Three ", map(arr, fn));

//This approach takes ~200ms for 5M elements.

//Approach 4: Preallocate Memory

/* 
You can create an empty array with some length using the new Array(len) constructor. 
Note that the memory is allocated but the array doesn't actually contain any elements.

This technique is more performant than appending elements to the end of the array. 
This is because whenever you push a value to an array, the array may not have enough memory allocated to it and it will need to be resized. 
This is an expensive operation. Initializing the memory upfront can result in much better performance.

*/

var map = function (arr, fn) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
console.log("Four ", map(arr, fn));

//This approach takes ~40ms for 5M elements.

// Approach 5: 32 Bit Integer Array

/* 
JavaScript allows you to use typed arrays. These aren't like normal JavaScript arrays because they only allow specific data types and their size cannot be altered.

These are a useful tool when you want to store lots of data in a memory efficient way. 
Traditional arrays can take up significant amounts of memory because they are not fixed size and can store arbitrary data.
*/

var map = function (arr, fn) {
  const newArr = new Int32Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

console.log("Five ", map(arr, fn));

//This approach takes ~20ms for 5M elements.

//Approach 6: In-Memory Transformation

/*
To achieve optimal performance, you can simply reuse the memory already allocated to the first array.

It's important to note that it is generally discouraged for a function to modify the values passed to it. 
It can lead to unexpected bugs where the user of the function was not expecting that as a side-effect. 
The built-in Array.map does not modify the original array.
*/

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

console.log("Six ", map(arr, fn));

//This approach takes ~10ms for 5M elements.
