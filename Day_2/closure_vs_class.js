//Closure way

function createAdd(a) {
  function add(b) {
    const sum = a + b;
    return sum;
  }
  return add;
}

const addTo2 = createAdd(2);
console.log(addTo2(5));

//Class vs Closure

class Add {
  constructor(a) {
    this.a = a;
  }
  displaySum(b) {
    const sum = this.a + b;
    return sum;
  }
}

const obj = new Add(10);
console.log(obj.displaySum(20));

/*
Besides differences in syntax, both code examples essentially serve the same purpose. 
They both allow you to pass in some state in a "constructor" and have "methods" that access this state.
*/
