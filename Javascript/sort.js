// Sort mutates the array
// sorts as strings

let arr = [1, 5, 11, 16, 163, 12];

arr.sort(); // [1,11,12,16,163,5]  => sorts as strings thats why all the 1 first

arr.sort((a, b) => a - b); // [ 1, 5, 11, 12, 16, 163 ] => going up

arr.sort((a, b) => b - a); // [ 163, 16, 12, 11, 5, 1 ] => going down
