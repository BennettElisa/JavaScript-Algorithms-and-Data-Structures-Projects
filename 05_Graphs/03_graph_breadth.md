# Breath First

- Visit neighbors at current depth first
- Priotize visiting all neighbors at a given depth before moving downwards or visiting neighbors of neighbors

- Use a queue as the data structure

# Pseudocode

- Function accepts a starting vertex
- Create a queve (array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertex from the queue and push it into the array that stores the nodes visited
- Loop over each vertex in the adjacency list for the vertex you are visiting
  -If it is not inside the object that stores nodes visited, mark it as visited and en
