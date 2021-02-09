## Data Structures & Algorithms

- A way of organizing data so that it can be used effectively
- Essential ingrediantes in creating fast and powerful algorithms
- Helps manage and organize data
- Makes code cleaner and easier to understand

**Abstract Data Type**

    Abstract data type (ADT) is an abstraction of a data structure which only provides the interface to which the data structure then must adhere to. The interface does not give any specific details about how or in what language it will happen. Example:

    | Abstraction | Inplementation |
    | ----        | ----           |
    | List        | Dynamic Array  |
    |             | Linked List    |

**Big-O Notation**

Big-O simply means the time complexity of an algorithm and tells us about the worst case senario.
n - represents the size of the input complexities ordered in the smallest to largest.

- Constant Time: 0(1)
  - while loop
  - for loop
  - Linear Search
- Logarithmic Time: 0(log(n))
  - Binary Seach
- Linear Time: 0(n)
- Linearithmic Time: 0(nlog(n))
- Quadric Time: O(n2)
  - Double for loop
- Cubic Time: O(n3)
- Exponential Time: O(bn)
- Facortial Time: O(n!)

Intermediate Algorithms

- Merge Sort - O(n log n)

  - helper function that sorts numbers
  - recursion function that breaks one array down into smaller and smaller arrays that are passed to the helper function

- Quick Sort: Best O(n log n) Worst O(log n^2)

  - all about the pivot point
  - take an array, decided on a pivot point
  - ideally pivot point would be the mean
  - however the first elementhe is choosen in the example with Colt Steele
  - take the pivot point and see if it's great than the next element if so, increment the index varaiable if not move to the next element
  - more to come....

- Radix Sort
