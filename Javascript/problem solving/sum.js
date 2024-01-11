const twoSum = function (numbers, target) {
  let comp = new Map();
  // used map here as it create a table index => number
  // if the required was only the number so better to use Set
  for (let i = 0; i < numbers.length; i++) {
    if (!comp.has(target - numbers[i])) {
      comp.set(numbers[i], i);
    } else {
      console.log('result', comp.get(target - numbers[i]), i);
      break;
    }
  }
};
twoSum([2, 5, 7, 11, 15], 9);
// find index of numbers add up to 9
