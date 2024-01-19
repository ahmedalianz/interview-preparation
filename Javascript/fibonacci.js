// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let fibonacciMap = new Map(); // a map so i can track idex
  // here using array or map is the same as we need only lookup for index O (1)
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      fibonacciMap.set(i, i);
    } else {
      fibonacciMap.set(i, fibonacciMap.get(i - 1) + fibonacciMap.get(i - 2));
    }
  }
  return fibonacciMap.get(n);
}

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
