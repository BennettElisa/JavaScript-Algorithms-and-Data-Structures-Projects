# Great use cause for Sliding Window

## Brute Force

```

// Largest consectutive subset


const largestSubSet = function(arr, num){

   // create variable to store max value number could be positive or negative
  let max = -Infinity;

  // iterate over the array and start with the first number in the array
  for(let i = 0; i < arr.length - num + 1; i+=1){
      // [1,2,3,4,5,6,7,8] --> len = 8
      // 8 - 3 (number passed in) = 5
      // arr.length - num + 1 = 6
      let currentMax = 0

  // inner loop continues for the length of the number passed in starting at 0
      for(let j = 0; j < num; j+=1) {
         // increment the current max by adding each index up to the num passed in
         // currentMax = 1 + 2 + 3  = 6
          currentMax+= arr[i + j]
      }
  // if the max is larger than the current max
  // reassign the variable to the new max
      if(currentMax > max) {
        max = currentMax
      }
    }
  // return largest subset number
    return max
}

largestSubSet([1,2,3,4,5,6,7,8], 3) //21


```
