# Stacks - LIFO - Last In First Out

# Big O

    - Insertion O(1)
    - Removal O(1)
    - Searching O(n) --> although if you want to search you probably don't want to use a __Stack__

- Collection of data
- Stacks are used to manage function invocations
- Undo / Redo features in Photoshop, Mircosoft Word etc.
- Routing (the history object) is treated like a stack
- Tree's and Graphs algorithms can be use a Stack as an intermediate
- Not built into JavaScript

- Abstract Concept - store data in some way that the first things in is the first thing out
- Many ways to build a stack
- Easiest way is to use an array - push/pop
  -unshift/shift
- However with larger datasets we would probably NOT want to use an array and instead we'll use a stack in the form of a **Linked List**

If we give it some thought - if all we need to do is access the first in and the last out than using an array method isn't the most efficient because an array also comes with indices, methods etc. and provides more utilitiy than is need. So we make our stack MORE efficent by using a Linked List

# Pushing Pseudocode

- Function accepts a value
- Create a new node with that value
- If there are no nodes in the stack set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

# Pop Pseudocode

- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only one 1, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first

```


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

push(value){
    let newNode = new Node(value)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    } else {
        let temp = this.first
        this.frist = newNode
        this.first.next = temp

    }

    return ++this.size

}

pop(){
    // first check if the list is empty if nothing return null
    if(!this.first){
        return null
    }
    // this is what will be returned at the end
    let temp = this.first
    // edge case if there is only one node then we need to set last to null
    if(this.first === this.last){
        this.last = null
    }
    // now we update first
    this.first = this.first.next
    // decrement size
    this.size--
    return temp.value
}

}
```
