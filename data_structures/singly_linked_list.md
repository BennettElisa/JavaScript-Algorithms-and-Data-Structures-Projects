# Singly Linked List

Objectives: - define a singly linked list - compare and contrast linked list with arrays - implement insertion, removal and traversal methods on singly linked list

It is a data structure that stores what ever you want and it's ordered. Linked list consist of nodes and each node has a value and a pointer to another node or null **BUT NO INDEXES** like an array. **Random access is NOT allowed** meaning you have traverse each item to get to the end .

A node contains information like a string or a number AND it references ANOTHER node.

Properties:

A data structure contains a HEAD, TAIL and LENGTH
Each node is only connected one directionly to the next node

![image](insert section 19 hand drawing here)

# Pushing values onto the list

// piece of data - val
// reference to next node - next

```
class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
      let newNode = new Node(val)
      if(!this.head){
          this.head = newNode
          this.tail = this.head
      } else {
          this.tail.next = newNode
          this.tail = newNode

      }
      this.length++
          return this
    }
}

var list = new SinglyLinkedList
```

// list.push("Hello")
// list.push('Still working')
// list.push(99)
