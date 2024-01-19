//Discord
//Udemy
//Google
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// USING LINKED LIST //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(item) {
    const newNode = new Node(item);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // make pointer on the top ( a reference )
      const pointer = this.top;
      //  assigning the new top to be the new item
      this.top = newNode;
      //  assigning the new top next pointer to be the old top
      this.top.next = pointer;
    }
    this.length++;
  }
  pop() {
    // make pointer on the top ( a reference )
    const pointer = this.top;
    //  assigning the new top to be the next of the old top
    this.top = pointer.next;
    if (this.length === 1) {
      this.bottom = null;
    }
    this.length--;
  }
  peek() {
    return this.top;
  }
  isEmpty() {
    return this.length === 0;
  }
}
const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.push('To be Popped');
myStack.pop(); // remove last item
console.log(myStack);
console.log(myStack.peek()); // have a look on last inserted item
console.log(myStack.isEmpty()); //false

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// USING ARRAYS //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
class Stack {
  constructor() {
    this.array = [];
  }
  push(item) {
    this.array.push(item);
  }
  pop() {
    this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  isEmpty() {
    return this.array.length === 0;
  }
}
const myStack2 = new Stack();
myStack2.push('Google');
myStack2.push('Udemy');
myStack2.push('Discord');
myStack2.push('To be Popped');
myStack2.pop(); // remove last item
console.log(myStack2);
console.log(myStack2.peek()); // have a look on last inserted item
console.log(myStack2.isEmpty()); //false
