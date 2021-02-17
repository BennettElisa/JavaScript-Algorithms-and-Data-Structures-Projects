## Section 15: Merge Sort

Time Complexity: O(n log n) - best and worst time complexity are the same for merge sort

Space Complexity: O(n)

- Merge sort will always be O(n log n) at it's best and at it's worst
- Considered a more intermediate algorithm
- scales very well if we are working with a hundred thousand elements
- allows us to sort large arrays more quickly

- there is a tradeoff between efficiency and simplicity
- its a combination of TWO things - merging and sorting
- works by decomposing an array into smaller arrays of 0 or 1 element
- also know as a dive and conquer algorithm
- then builds up a newly sorted array

![mergeSortExample](visuals/mergeSortExample.png)

Reference: JavaScript Algortithms and Data Structures Colt Steele
