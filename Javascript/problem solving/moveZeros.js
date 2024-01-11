// move zeros in same array
// this is the slow & memory consuming solution
const moveZeroes = function (numbers) {
  const numOfZeros = numbers.filter(n => n === 0).length;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numbers.splice(i, 1);
      i--;
    }
  }
  for (let j = 0; j < numOfZeros; j++) {
    numbers.push(0);
  }
  console.log(numbers);
};
moveZeroes([0, 1, 0, 3, 12]);
//using 2 pointers method
const moveZeroesFast = numbers => {
  let low = 0; // first pointer on the first element
  let high = low + 1; // second pointer on the next element
  while (high <= numbers.length - 1) {
    // loop over elements until reaching last element
    if (numbers[low] !== 0) {
      low++;
      high++;
    } else {
      if (numbers[high] !== 0) {
        //This line uses destructuring assignment to swap the values
        [numbers[low], numbers[high]] = [numbers[high], numbers[low]];
        low++;
      }
      high++;
      numbers;
    }
  }
  console.log(numbers);
};
moveZeroesFast([0, 1, 0, 3, 12]);
