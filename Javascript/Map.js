// map takes any data type as key and better than plain object to access a value

//weak map is the same as map but it does not keep the reference of the key (will be garbage collected) and accepts only object as key

const myMap = new Map([
  ['apple', 'red'],
  [NaN, 'yellow'],
  [5, 'five'],
  [true, 'true'],
]);

myMap.get(5); // 'five' directly no looping like normal array

myMap.set(NaN, 'asd'); // mutates the Map
// myMap ===>  { 'apple' => 'red', NaN => 'asd', 5 => 'five', true => 'true' }

let x = [...myMap.values()];
// [ 'red', 'yellow', 'five', 'true' ]
