## Manipulate String with WDL Pattern

## Take Aways

- Big O O(n^2)
- Iterate over each letter in string and run inner for loop on each character - This increases our upward Bound significantly because each letter in the string will go through 3 cycles of the inner loop before the next character is evaluated.
- Splice Method will modify original string

```
const arrangeStr = (s) => {

  let splitS = s.split('')
  let output = ''

  for(let i = 0; i < s.length; i++){
    console.log(splitS)
    for(let char of "WDL"){
      // includes method to check if char is in array
      if(splitS.includes(char)){
        output += char
        let removeChar = splitS.indexOf(char)
      // splice modifies orginial array
        splitS.splice(removeChar, 1)
      }
    }
  }
  // if char is not "W" "D" or "L" append it to end of string at end of iteration
    if(splitS.length){
       output+=splitS.join('')
    }
  return output
}

rearrangeStr("WDLDL") // WDLDL
rearrangeStr("WLDLBR") // WDLLBR
rearrangeStr("FDFDH") // DDFFH
rearrangeStr("") // ""
```
