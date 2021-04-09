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

- Fixed Size
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
