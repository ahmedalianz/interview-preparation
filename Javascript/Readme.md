**Definition**

JavaScript is a synchronous language, meaning that it executes code line by line in the order that it appears in the program. However, JavaScript can also be non-blocking, even though it has a single thread of execution. When JavaScript encounters an asynchronous task such as setTimeout or AJAX, it sends it to the Web API, which runs this task asynchronously. The JavaScript engine, such as V8 in Chrome, has both heap memory and a call stack that takes every function and runs it one after another. When the asynchronous task is finished, it is sent to the callback queue to run after the call stack is empty

---

**Interpreted vs Compiled**

Interpreted Languages:
Js is Interpreted language which is executed line by line, translating each line into machine code just before it's executed.
Interpreted languages are generally more flexible but can be slower than compiled languages because they perform translations at runtime.

Compiled Languages:
Compiled languages are translated from the source code into machine code ahead of time. This process is done by a compiler.
Compiled languages are generally faster than interpreted languages because the translation is done in advance.

---

**Promise (all - allSettled - race)**

Promise.all waits for all promises to resolve or for the first one to reject.
Promise.allSettled waits for all promises to settle and provides information about each promise's outcome.
Promise.race resolves or rejects as soon as the first promise in the input array settles.
The choice of which to use depends on your specific use case. If you need all promises to succeed and want to handle their results collectively, use Promise.all. If you want to know the outcome of every promise, regardless of whether they succeed or fail, use Promise.allSettled. If you're interested in the result of the first settled promise, use Promise.race.

---

**Declarative vs Imperative**

imperative :is to give instructions one by one , do this after that (for loop)
declarative : is to tell what to do only not explaining how to do it (map)

---

**Break vs Continue**

break to stop loop when certain condition triggers,continue will bypass this step of loop when certain condition triggers.

---

**flatMap() vs map().flat()**

if you need to transform and then flatten an array, flatMap is a more concise and expressive choice. However, if you want more control or need to perform additional operations between map and flat, you can use map().flat().

---

**call & apply & bind**

All functions use call or apply by default when called : get_name()===get_name.call()===get_name.apply() .. but we can use call , apply to copy function from other objects

```
const wizard = {
  name: "Merlin",
  health: 100,
  heal() {
    return (this.health = 100);
  },
};
const archer = {
  name: "Robin Hood",
  health: 30,
};
console.log(archer); // health is 30
wizard.heal.call(archer);
console.log(archer);  // health is 100
```

after using the wizard healing function on archer health 100
call and apply are typically the same the only difference is that call takes a list of parameters like wizard.heal.call(archer,param1,param2,param3) but apply takes this list into an array wizard.apply.apply(archer,[param1,param2,param3])

bind does not immediately invoke the function. Instead, it creates a new function with a fixed this value and optionally prepends arguments to the arguments that are passed when the new function is invoked.

```
const healArcher=wizard.heal.bind(archer);
healArcher()
console.log(archer) // health is 100 and can be called any time
```

---

**for in & for of**

if you want to iterate over the properties of an object, you should use for...in it iterates over the keys of the object. If you want to loop through the values of an iterable data structure like an array or a string, use for...of

---

we can enhance performance of loops that is searching for an item by using break to break out of loop when item is found and cancel rest of the array
