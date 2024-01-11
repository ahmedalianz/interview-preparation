//get the repeating numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 2, 3, 5, 67, 3, 1];
let frequency = {};
let repeatedNumbers = [];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (frequency[element]) {
    repeatedNumbers.push(element);
  } else {
    frequency[element] = 1;
  }
}
let result = [...new Set(repeatedNumbers)];
//result= [ 4, 3, 2, 5, 1 ]
let repeatedNumbers2 = arr.filter(
  (number, index, array) => array.indexOf(number, index + 1) !== -1,
);
let result2 = [...new Set(repeatedNumbers2)];
//result= [ 4, 3, 2, 5, 1 ]

// check if there is duplicates
const containsDuplicate = function (numbers) {
  console.log(new Set(numbers).size !== numbers.length);
  // using Set.size is faster than using [...new Set()].length
};
containsDuplicate([1, 2, 3, 3]);
