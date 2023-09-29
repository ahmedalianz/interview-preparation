//get max number in array
let arr = [1, 2, 3, 4];
console.log(Math.max.apply(null, arr)); //4
console.log(Math.max(...arr)); //4
