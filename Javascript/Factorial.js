// Recursive
function findFactorialRecursive(number) {
  if (number == 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
  //keep calling the function util it reaches the last factorial 2! = 2
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer = answer * i;
  }
  return answer;
}
findFactorialIterative(5); //120    == > 5*4*3*2*1
findFactorialRecursive(5); //120    == > 5*4*3*2*1
