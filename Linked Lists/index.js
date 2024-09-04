// class LinkedList {
//   constructor(value){
   // Create a new node 
//   }
//   push(value){
     //Create || add a new node to end
//   }
//   unshift(value){
     //create || add new node to beginning
//   }
//   insert(index, value){
     // Create new node || insert node
//   }
// }


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const newNode = new Node(4);

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList)