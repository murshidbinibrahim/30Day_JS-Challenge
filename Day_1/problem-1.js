//Method 1 - Function Syntax

const createHelloWorld = () => {
  return function () {
    return "Hello World";
  };
};

createHelloWorld();

//Method 2 - Arrow Syntax

const createHellWorld = () => {
  return () => "HelloWorld";
};

createHellWorld();

//Method 3 - Arrow Syntax + Rest Arguments

const createHelWorld = () => {
  return (...args) => "HelloWorld";
};

createHelWorld();
