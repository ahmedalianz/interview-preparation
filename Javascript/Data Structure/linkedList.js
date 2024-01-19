//1-10-12-5-16
// singly linked list
// doubly linked list that can point backwards also using prev
let linkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  append(value) {
    let newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    let current = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        current.prev = current;
        current.next = {value: current.value, next: current.next};
        current.value = value;
      }
      current = current.next;
    }
    this.length++;
  }
  remove(index) {
    let current = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        current.value = current.next.value;
        current.next = current.next.next;
      }
      current = current.next;
    }
    this.length--;
  }
}
const linkedListNew = new LinkedList(10);
linkedListNew.append(5);
linkedListNew.prepend(7);
linkedListNew.insert(2, 12);
linkedListNew.remove(2);
console.log(linkedListNew);
console.log(linkedListNew.print());
