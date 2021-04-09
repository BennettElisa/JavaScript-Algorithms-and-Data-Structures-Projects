## Merge Sort

Objectives:

- Understand the limiations previos algorithms
  - Bubble Sort does NOT do well on large datasets
- Understand the benifits of Merge, Quick, Radix Sort
- Faster Sorts from O(n2) to O(n log n)
- Trade off
  - More efficient but less simple
- Combination of two things - merging and sorting
- Works by decomposing an array into a smaller array
  - Also called "Dive and Conquer"

Conceptual:

- Take large array
- Break down until you have one or two array items
- Sort and then Merge
- Array gets built back

- The arrays must be in order to implement the merge sort
- First implement a function responsible for merging two sorted arrays
- Given two arrays which ARE SORTED, the helper function should create a new array which is also sorted and consists of all the elements in the two input arrays
- Function should run in O(n+m)

## Merge Arrays Pseudocode ()

Create Helper Merge Function:

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't look at:
  - if the value of the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once an array is complete push the values from the remaining arrays into final array
