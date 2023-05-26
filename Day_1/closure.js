function createCounter() {
  let value = 0; //HIDDEN STATE
  function increment() {
    return ++value;
  }
  return {
    incrementFn: increment,
  };
}

const counter = createCounter();
const counter1 = createCounter();

console.log(counter.incrementFn());
console.log(counter.incrementFn());

console.log(counter1.incrementFn());
