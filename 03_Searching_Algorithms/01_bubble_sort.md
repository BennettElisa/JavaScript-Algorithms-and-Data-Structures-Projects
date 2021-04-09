## Sort Method in JS

- JavaScript has a build in sort method the .sort() which is based on Unicode String conversion.
- The .sort() method accepts a comparator function to tell JavaScript how we want to sort

```

function numberCompare(num1, num2){
return num1 - num2
}

((a,b)) => a - b

function compareByLen(str1, str2){
return str1.length - str2.length
}

```

## NOW BUBBLE SORT! Best Case: O(n) Worst Case O(1) Qudradtic Time

- Not efficient
- Not commonly used
- Helps us understand why other algorithms improve it
- Called Bubble Sort because values "Bubble' to the top

- As we look through each item we compare them
- If the next one is larger we swap
- In the first pass - the largest value "Bubbles" to the top i.e is placed
  at the end
- In the second pass and subsequent passes the largest will continue to "Bubble" to the top
- For each pass we have fewer and fewer elements which we can account for with our for loop

## Set up swapping functionality

```

// ES5

    function swap(arr, idx1, idx2){
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }

// ES6

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

```

## Bubble Sort Pseudocode ()

- Define function that takes an array
- Start looping with a variable called i at the end of the array towards beginning
- Start inner loop with variale called j from the beginning unti i-1
- If arr[j] is greater than arr[j + 1], swap the two values
- If not swaps break
- Return sorted array

```
const bubbleSort = (arr) => {

    let noSwaps;
    for(let i = arr.length; i > 0; i--){
    noSwaps = true
        for(let j = 0; j < i - 1; j++){

            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
//                 swap(arr, arr[j], arr[j+1])
            }
        }
        if(noSwaps) break;
    }

    return arr

}

```
