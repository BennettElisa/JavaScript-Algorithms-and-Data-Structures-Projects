# Hash Tables aka Hash Map

Used very frequency because they are built into most all languges. For example an array - it comes with the language.

## Objectives:

    - What is a hash table?
    - Define a hashing algorithm
    - What makes a good one?
    - Understanding how collisions occur in a hash table
    - Handle collisions using seperate chaining or linear probing

## Real Life Examples:

    - Dictionaries - quickly look up a word and find it's definition or translation
    - Spell Checkers
    - Compilers to look up address of functions and varaibles and code editors for looking something up
    -

**So, what is a hash table?**
Hash tables are used to store key-value pairs
Like arrays, but keys are NOT ordered
FAST for finding, adding and removing values!

**So, why should I care?**
Nearly every programming language has some sort of hash table data structure
Think SPEEEEEEEED - Because of their speed hash tables are commonly used.

**What do Hash Tables look like?**
In Python has DICTIONARIES
In JS has OBJECTS and MAPS
In Java, Go & Scala have MAPS
In Ruby has Hashes

To understand what's happening under the hood we're going to recreate the wheel i.e build a model to better understand how it works.

1.) We'll use an array to implement a hash table model
2.) We need a way to convert keys into a valid array indices
3.) Have a function that performs this task is called a **hash function**
4.) A Hash table that takes an image, pdf, string, video --> any type of information and returns a number isn't easy which is why we want to convert keys into valid

# Key Words:

- Fixed Size - size is determined at the START
- Fast(i.e constant time)
- Distributes uniformly
- Doesn't cluster outputs as specific indices
- Deterministic (same input yields same output)

First Example:
Creating a hash table for a string, using UTF-16 Character Codes
Using **PRIME NUMBERS** for the array length and determining the index to increase performance and lower collision.

function hash(key, arrayLen){

    let total = 0;
    let WEIRD_PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){
        // map "a" to 1 etc.
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total

}

hash("pink")

## Hash Function

```
function hashStringToInt(s, tableSize){
  // select a prime number to use
  let hash = 17
  // iterate over the string
  for(let i=0; i <s.length; i++){
    // hash the string
    console.log(s.charCodeAt(i))
    hash = 13 * hash * s.charCodeAt(i) % tableSize
    console.log("Each hash", i, hash)

  }
  return hash
}
```

## Collisions

- Seperate Chaining
- Linear Probing
- Quadratic Probing

When a collision happens two of the most common ways of dealing with the collision is through seperate chaining and linear probing or quadratic probing

With **seperate chaining** at each index in our array we store values using a more sophisticated data structure (e.g an array or a linked list)

This allows us to store multiple key value pairs at the same position

## HashTable Class with Set, Get, and Hash Function

class HashTable {

let table = new Array(97) // prime number for hash table size
let numItems = 0
let loadFactor = this.numItems / this.table.length

// conditional to check load factor and increase size of hashtable if at 80% load factor

    // Hash Function
    hashStringToInt(s){
    // select a prime number to use
    let hash = 17

        // iterate over the string
        for(let i=0; i < s.length; i++){
          // hash the string
          hash = 13 * hash * s.charCodeAt(i) % this.table.length
        }
        return hash

    }

// set method accept a key and a value

    setItem(key, value){
      // hash the key
        const idx = this.hashStringToInt(key)
        if(!this.table[idx]){
           this.table[idx] = []
             this.numItems+=1
        } else {
           this.table[idx].push([key, value])
             this.numItems+=1
        }
    }

// get method to get the value

    getItem(key){
      // hash the key that is passed in

      const idx = this.hashStringToInt(key)

        for(let [findKey, value] of this.table[idx]){
          if(findKey === key){
            return value
          }
        }

    }

}

## Another Example with Constructor Function

```

class HashTable {
  constructor(size){
    this.table = new Array(size)
    this.numItems = 0
  }
    // Hash Function
  hashStringToInt(s){
    // select a prime number to use
    let hash = 17
        // iterate over the string
        for(let i=0; i < s.length; i++){
          // hash the string
          hash = 13 * hash * s.charCodeAt(i) % this.table.length
        }
        return hash

    }

// set method accept a key and a value

    setItem(key, value){
      // hash the key
        const idx = this.hashStringToInt(key)
        if(!this.table[idx]){
           this.table[idx] = []
        }
           this.table[idx].push([key, value])
           this.numItems+=1

    }

// get method to get the value

    getItem(key){
      // hash the key that is passed in
      const idx = this.hashStringToInt(key)

        for(let [findKey, value] of this.table[idx]){
          // find the matching key
          if(findKey === key){
            return value
          }
        }
        // otherwise return undefined - meaning the key wasn't found
        return undefined
    }
}

let newHash = new HashTable(7)
newHash.setItem("hi", "hello friend!")
newHash.setItem("bye", "Adios")
console.log(newHash.getItem("bye")) // "Adios"
console.log(newHash.getItem("hi")) // hello friend
newHash

```
