//Currying function: is a function that takes first argument and return a function witch takes 2nd arg and so till the final result
// it’s the process of converting a function that takes multiple arguments into a function that takes the first returning a function takes the second …>
//The key idea behind currying is to break down a function that takes multiple arguments into a series of unary (single-argument) functions.

let employee = name => age => salary =>
  `${name} is ${age} years old and earns ${salary}`;
console.log(employee('John')(30)(5000));
////////////////////////////////
const multiply = a => b => a * b;
curred(3)(4); // 3=>(4)=>3*4 >>> 12
const multiplyBy3 = multiply(3); //stored a with 3 can be used multible
multiplyBy3(5); //3*5 >> 15
////////////////////////////////
const no_curry_multiply = (a, b) => a * b;
const _multiplyBy3 = no_curry_multiply.bind(this, 3);
console.log(multiplyBy3(2));
// if not curried and we wanna curry it use bind
