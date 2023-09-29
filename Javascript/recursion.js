//Recursion function :is a function that calls itself until something stops it.
let countDown = num => {
  if (num === 0) return;
  console.log(num);
  countDown(num - 1);
}; //if not stopped will get maximum call stack exceeded (a lot of function calls)
countDown(10);
