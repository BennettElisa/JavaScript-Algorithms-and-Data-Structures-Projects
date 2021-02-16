# Sliding Window Pattern

# Time Complexity: O(N)

- The sliding window pattern involves creating a window which can be an **array** or **number** from one position to another.

- Depending on a CERTAIN condition the window either increases or closes. If the window closes then a new window is created.

- Super useful for keeping track of **subset** of data in an array/string

- Keeping track of a SUBSET of data in a larger set of data

- A native solution would be to iterate through the entire array every time your adding up a new sum. There is a better solution with using the sliding window pattern.

- Couple things to point out about the code below
  - Two for loops are used BUT they are NOT nested which reduces the time complexity.
  - And technicial we only go over the loop ONE TIME.

```
function maxSubarraySum(arr, num){
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null; // edge case

    for (let i = 0; i < num; i++){  // create first sum
        maxSum += arr[i]
    }
    tempSum = maxSum; // tempSum is holding the value of maxSum

// this new loop starts based the # passed in which moves up foward in our array
    for (let i = num; i < arr.length);
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

```
