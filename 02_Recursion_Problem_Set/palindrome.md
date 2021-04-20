# Palindrome

```
const isPal = (string) => {

// clean the string
const cleanString = string.replace(/[^\w]/g,'').toLowerCase()

// base case --> if length is falsey ie no more letters to compare return true
if(!cleanString.length) return true

// compare first and last letter
if(cleanString[0] !== cleanString[cleanString.length-1]) return false

// recursively call function passing in new string
return isPal(cleanString.slice(1,-1))

}

isPal('car') // => false
isPal('racecar') //=> true
isPal('RaCecAr') // => true
isPal('!? 100 ABCcba 001 ?!') // => true

```

# Performance analysis

- Time Complexity: O(n)

* We must recurse through the string n/2 times in order to return false.

- Space Complexity: O(n)

* We create n/2 additional calls on the recursive call stack, each time we slice of the first/last characters and recurse.

# Non Recursive option

```
const isPalReverse = (str) => {

    let cleanStr = str.replace(/[^\w] /g, '').toLowerCase()
    let reversedStr = cleanStr.split('').reverse().join('')

    return cleanStr === reversedStr

}
```
