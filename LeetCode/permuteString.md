# Permute A String

## Key Words

- Generate All
- Print All
- COmpute All

## 3 Keys to Backtracking

- Choice: Choose a character from the string and recurse it - remember our choice reduces our decision space
- Constraints: We have less characters to choose from at each point
- Goal: n placements. n choices. A purmuted string

- The factorial of the length of the string is the number of permutations we can expect.

const findPermutations = (string) => {
if (!string || typeof string !== "string"){
return "Please enter a string"
} else if (string.length < 2 ){
return string
}

let permutationsArray = []

for (let i = 0; i < string.length; i++){
let char = string[i]

    let remainingChars = string.slice(0, i) + string.slice(i + 1)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }

}
return permutationsArray
}

console.log(findPermutations('abcd'))
