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

For example lets say we have an array of 5 values and we want to find if their is a pair that adds up to a certain target number. 

If we use a nested loop we will end up with O(n^2) verses using a pointer solution that will be O(n) Linear Time or O(n log n) Binary

Reference [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass)
