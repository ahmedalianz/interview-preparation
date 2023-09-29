// when a function returns other function the inner function is called
// closure and have access to the outer function variables

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const increment = createCounter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
