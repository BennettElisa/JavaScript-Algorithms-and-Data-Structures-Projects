## Data Structures

- Binary Search Trees
- Queues
- Singly Linked Lists
- Undirected Unweighted Graphs
- Binary Heaps
- Directed Graphs
- Hash Tables
- Doubly Linked Lists
- Stacks

What makes something a data structure?

- It is a collectinon of values i.e [1,3,4,5,6]
- It highlights the relationship among the collection (values) i.e ordered list, unorder list
- It comes with functions or operations that can be applied to the data i.e [1,2,4,2,6].filter(el => el > 2); pop(), push() etc.

Different data structures excel at different things which is why there are SO MANY. Some are very specialixed and others are more generally used.

Existing Use Cases

- DOM (Tree Data Structure)

Good to remember - There is no BEST data structure - they all thrive in different situations

Examples:

1.) Let's say your working with Google maps which means your working with map/location data. You want code that will route you the nearest gas station - Use a GRAPH!

2.) What if you need an ordered list with fast inserts/removals at the beginning and end? And...it's **MILLION data points** - Use a LINKED LIST!

3.) You want to do some web scraping with nested HTML for website that you want to collect data from or writing an App that is scraping data from the website. Think - TREE!

4.) Do you need create an app that has scheduled task and you need to find out which task is next on the schedule. Use a BINARY HEAP!

These are NOT prebuilt into JavaScript which is WHY we have to write them :)

We are defining a new Class for each data structure things you need to know:

- ES6 Syntax
- Class keyword
- Instances
- constructor function
- etc.
