const user = {
  func: function whoIsThis() {
    console.log(this); // user
  },
};
user.func();

////////////////////////////////
const user2 = {
  func: () => {
    console.log(this); // global object
  },
};
user2.func();

////////////////////////////////
let arr = [1, 2, 3];
arr.forEach(call, {name: 'ahmed'}); // will be {name: "ahmed"} because in this case the second argument of forEach is ThisArg with is object (this refer to)
function call() {
  console.log(this);
}
call(); // result of calling this from here the global object

////////////////////////////////
class User {
  arr = ['Ahmed', 'ali', 'mohamed'];
  get1() {
    //first this refer to object
    this.arr.forEach(function () {
      console.log(this); // refers to thisArg (second argument of forEach) which is undefined
    });
  }
  get2() {
    this.arr.forEach(_ => {
      console.log(this); //arrow function this refer to object calling it
    });
  }
}

const user3 = new User();
user3.get1();
user3.get2();

////////////////////////////////
// this refers to the object who calls it
function sayHello() {
  console.log(`Hello, ${this.name}`);
}
const person = {name: 'Alice'};
sayHello.call(person); // Output: Hello, Alice

////////////////////////////////
// Arrow functions (=>) behave differently with this.
// They capture the this value from their enclosing context lexically, which means they inherit this from the surrounding code.

////////////////////////////////
//In event handler functions, this usually refers to the DOM element that triggered the event.
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
  console.log(this); // button
});
