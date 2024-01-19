// if we need to create a tree instead of creating it from scratch ,just use arboreal.js package
// trees can be unbalanced when adding multiple nodes to one side over the the other
// so for balancing them we use AVL trees / red - black tree

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root; // pointer to traverse tree
      let traverse = true;
      while (traverse) {
        if (value > currentNode.value) {
          //go right
          // if there is no node found
          if (currentNode.right === null) {
            currentNode.right = newNode;
            traverse = false;
          }
          // if there is a node update the current node (pointer)
          currentNode = currentNode.right;
        } else {
          //go left
          if (currentNode.left === null) {
            currentNode.left = newNode;
            traverse = false;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) return;
    let currentNode = this.root;
    let traverse = true;
    while (traverse) {
      if (value === currentNode.value) {
        traverse == false;
        return currentNode;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null; // a reference to current node parent so when removing a node we can connect the before and after
    let traverse = true;
    while (traverse) {
      if (value === currentNode.value) {
        //remove logic goes here

        traverse == false;
        return;
      }

      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(traverse(tree.root));
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
