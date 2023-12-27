function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const increment = counter();
console.log(increment(), increment(), increment()); // 1 2 3
function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}
const increment2 = counter();
console.log(increment2(), increment2(), increment2()); // 0 1 2
