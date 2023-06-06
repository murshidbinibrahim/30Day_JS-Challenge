//Array.map()

const arr = [1, 2, 3];

const res = arr.map((x) => x + 1);

console.log(res);

//Map Array Manually

//Method-1(using for in loop)

function fn(arr, i) {
  return arr[i] + 1;
}

const map = (arr, fn) => {
  const result = [];

  for (const i in arr) {
    result[i] = fn(arr, i);
  }
  return result;
};

console.log("&&&", map(arr, fn));

//Method-2 (using for loop)

function fun(element) {
  return element + 1;
}

const mapFn = (arr, fn) => {
  const reslt = [];
  for (let i = 0; i < arr.length; i++) {
    reslt[i] = fun(arr[i]);
  }
  return reslt;
};

console.log("---", mapFn(arr, fun));
