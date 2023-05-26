const createCounter = (n) => {
  function counter() {
    return n++;
  }
  return counter;
};

const result = createCounter(10);
console.log(result());
console.log(result());
console.log(result());
