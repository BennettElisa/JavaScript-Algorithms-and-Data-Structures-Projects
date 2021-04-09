## Doubly Linked List

Almost identical to Singly Linked List. Doubly linked list have another pointer to the previous node.

Doubly linked list ---> take more memory === gives more flexibity
This is the tradeoff in selecting a doubly linked list

### Push Tail Pseudocode (AddTail)

Add an item on the end of a doubly linked list

- Create a new node w/ the value passed to function i.e const newNode = new Node(value)
- If head property is null set the head and tail to be the newly created node.
- If not, set the next property on the tail (this.next.tail) to be that node aka the new node created
- Set the previous property on the newly created node to be the tail (newNode.previous = this.tail)
- Set the tail to be the newly created node (this.tail = newNode)
- Increment the length
- Return the Doubly Linked List

### Pop Tail Pseudocode (RemoveTail)

Remove last item on the end of a doubly linked list

- If there is no head, return undefined
- Store the current tail to a variable to return later
- If the length is 1, set the head and tail to be null (because you'll be removing the only item that exist)
- Update the tail to be the previous Node
- Set the newTails next to null
- Decrement the length
- Return the node or value removed i.e return removedNode / return removedNode.value

### Unshift Head Pseudocode (AddHead)

- Add item as the new head:

- Create a new node with the value passed in
- If the length is 0
  - Set the head to be the new node
  - Set the tail to be the new node
- Otherwise
  - Set the previous property on the head of the list to be the new node
  - Set the next property on the new node to be the head property
  - Update the head to be the new node
- Increment the length
- Return the list

### Shift Head Pseudocode (RemoveHead)

- Remove an item as the head:

- If length is 0, return undefined or null
- Store the current head property in a variable
- If the length is one
  - set the head to null
  - set the tail to null
- Update the head to be the next of the old head
- Set the head's previous property to null
- Decrement the length
- Return old head node or value of old head node i.e return removedNode / return removedNode.value
