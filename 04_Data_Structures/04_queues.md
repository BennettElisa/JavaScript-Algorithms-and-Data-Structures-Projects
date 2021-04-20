# Queue - FIFO --> First IN First OUT

# Big O

    - Insertion O(1) Constant Time
    - Removal O(1) Constant Time
    - Searching O(n) --> although if you want to search you probably don't want to use a __Stack__
    - Access - O(N) --> although if you want to search you probably don't want to use a __Stack__

# Examples

- Waiting to play an online game - example of a queue
- Background task
- Uploading resources
- Print Queue

The Queue will be based off a Singly Linked List

- Enqueue means that it is added to the end aka(push)
- Dequeue means we are removing from the beginning (shift)

# Enqueue Peudocode - ADDING TO END

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last peroperty of the queue
- Otherwise, set the next property on the current last to be that node and then set the last perperty of the queue to be that node
- Increment size by 1 and return the object

# Dequeue Peudocode - REMOVING FROM BEGINNING

- If there is no first, return null
- Store the first property in a variable
- See if the first is the same as the last (Check if there is only 1 node). If so, set the last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the dequeued value

```

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}



class Queue {
    constructor(){
        this.first = null;
        this.last = null
        this.size = 0
    }


// think of push
enqueue(val){
    let newNode = new Node(val)
    // edge case if there is NO node --> set first and last to be that node
    if(this.size === 0 ){
        this.first = newNode
        this.last = newNode
    } else {
        this.last.next = newNode
        this.last = newNode
    }

    return ++this.size

}


// think of shift
dequeue(){

    if(this.size === 0) return null
    const temp = this.first

    if(this.first === this.last){

        this.last = null
    }
        this.first = this.first.next
        this.size--
        return temp.value

}

}



```
