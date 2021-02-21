## Quick Sort

Will need to create a Pivot Helper function for QuickSort

Ideally the pivot point is the median value in the dataset your sorting

pivot(arr)
-returns an INDEX
-returns a mutatated array

**Pivot Pseudocode**

- accept three arguments (array, startIndex, endIndex)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable
- Loop through array from the start to the end

  - if pivot is greate than current element, increment the pivot index variable and then swap the current element with the element at the pivot index

- Swap the starting element (i.e the pivot) with the pivot index
- return pivot index

Reference: JavaScript Algortithms and Data Structures Colt Steele
