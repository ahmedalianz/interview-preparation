//Ahmed
//Amira
//Alice

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enQueue(item) {
    const newNode = new Node(item);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //  assigning the new top to be  the new item
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  deQueue() {
    // make pointer on the first ( a reference )
    const pointer = this.first;
    //  assigning the new first to be the next of the old first
    this.first = pointer.next;
    if (this.length === 1) {
      this.last = null;
      this.first = null;
    }
    this.length--;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return this.length === 0;
  }
}
const myQueue = new Queue();
myQueue.enQueue('Ahmed');
myQueue.enQueue('Amira');
myQueue.enQueue('Alice');
myQueue.deQueue(); // remove first item
console.log(myQueue);
//   console.log(myQueue.peek()); // have a look on last inserted item
//   console.log(myQueue.isEmpty()); //false
