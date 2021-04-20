# Singly Linked List

**Objectives:** - Define a singly linked list - Compare and contrast linked list with arrays - Implement insertion, removal and traversal methods

A **singly linked list** is a data structure to store what ever you want and it's ordered. Linked list consist of nodes and each node has a value and a pointer to another node or null **BUT NO INDEXES** like an array. **Random access is NOT allowed** meaning you have traverse each item to get to the end .

A node contains information like a string or a number AND it references ANOTHER node.

**Properties:**

A data structure contains a HEAD, TAIL and LENGTH
Each node is only connected one directionly to the next node

![Singly List Visual](visuals/singly-linked-list.png)

# Pushing, Popping values

```
// piece of data - val
// reference to next node - next

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

    // add values to list with push method
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

    // remove values from list with pop method
      pop(){
          // if nothing in the list return undefined
          if(!this.length) return undefined
          // variable to keep track of what the last item was
        let current = this.head
        let newTail = current

        //loop through list until you reach the tail
        while(current.next){
            newTail = current
            current = current.next
        }

            this.tail = newTail
            this.tail.next = null // this cuts the old one off
            this.length--
            if(this.length === 0){ // reset head and tail to null when last item is popped off
                this.head = null
                this.tail = null
            }
            return current

         }




}

var list = new SinglyLinkedList

// list.push("Hello")
// list.push('Still working')
// list.push(99)
// list.pop()
// list.pop

```

# GET

Retrieve a node by it's position in the Linked List
Traverse the List

# GET Pseudocode

- This function should accept an index
- If the Index is less than zero or greater than or equal to the the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

```
get(index){
    if(index < 0 || index >= this.length) return null

    let counter = 0
    let current = this.head
    while(counter !== index){
        counter++
        current = current.next
    }
    return current
}


```
