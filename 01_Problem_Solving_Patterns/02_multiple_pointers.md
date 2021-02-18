# Multiple Pointers Pattern

### Time Complexity O(n) Linear Timer

### Space Complexity O(1)

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle base on a certain condition. It's very efficient for solving problems with minimal space complexity as well.

- Good fit for something with a linear structure such as:
  - array
  - string
  - singly linked list
  - doubly linked list

This pattern helps search for a PAIR or something that meets a certain condition such as: - Finding the first pair in an array where the sum is zero.
This pattern works best **ON A SORTED ARRAY**

# Pseudocode for sumZero

Set two pointers - one pointer at the beginnging (left) - one pointer at the end (right)
Check the sum of both pointers - if the sum === 0 return array with both elements - else if sum > 0 **decrement** right side by 1 - else **increment** the left side by 1

```
function sumZero(arr){
        // one point starts at the 0th index left

        // one pointer starts at the last index right

        // loop over array while left side is less than right side (fail safe to use <)

        // add up left and right pointer

        // if sum adds up to 0 you have a pair to return
                // return an arry [with values]
        // if sum is greate than zero
            // subract one from right
        // else
            // subtract one from left

}

```

Reference [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass)
