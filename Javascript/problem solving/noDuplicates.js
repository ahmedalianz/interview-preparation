let arr = [1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 2, 3, 5, 67, 3, 1];
const noDuplicates = arr.filter((ele, idx) => arr.indexOf(ele) === idx);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 67 ]
