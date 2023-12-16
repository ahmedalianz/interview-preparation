//get the non repeating numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 9, 1, 4, 6, 7, 3, 4, 6, 7];
uniques = arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e));
// indexOf and lastIndexOf return same element then it's unique
// [5,9]
