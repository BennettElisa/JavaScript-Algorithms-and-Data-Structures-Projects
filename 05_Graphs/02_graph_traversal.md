## Graph Traversal

- No indicated starting point with a graph you can start on any of the vertices aka nodes

## Depth First Search

- It's really important that we remember where we've been

## Pseudocode Recursion

// Depth First Traversal - Recursive

Function should accept a starting node
Create a list to store the end result, return at end
Create an object to store visited vertices
Create a helper function which accepts a vertex

- Helper func returns early if vertex is empty
- Helper func places vertex it accepts into the visited object and pushes that vertex into the results array
- Loops over all the values in the adjacencyList for that particular vertex
  -If any of those values have NOT been visited, recursively invoke helper function on that vertex

```
class Graph{
    constructor(){
        this.adjacencyList ={}
    }

    addVertex(vName){
        if(!this.adjacencyList[vName]) this.adjacencyList[vName] = []
    }

    addEdge(v1, v2){
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)

    };

    removeEdge(v1, v2){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(elem => {
        if(elem !== v2) return elem
      });

      this.adjacencyList[v2] = this.adjacencyList[v2].filter(elem => {
        if(elem !== v1) return elem
      });
    }

     removeVertex(v1){
      if(this.adjacencyList[v1]){

          this.adjacencyList[v1].forEach(edge => {
          this.removeEdge(edge, v1)
          })

            delete this.adjacencyList[v1]
      }

      }

depthFirstRecursion (start){
// We are also using closure to have access to these
// variables within the helper function

 // if vertex doesn't exist in the graph return null
  if(!this.adjacencyList[start]) return null

  const result = [];
  const visitedVertices = {};
  // the meaning of this will change within our inner function so to preserve a reference to the //adjacencyList we can define a const variable to hold it in closure
  const adjacencyList = this.adjacencyList

  function depthFirstSearch (vertex){
    // if the vertex doesn't have edges return early
      if(!adjacencyList[vertex].length) return;
      visitedVertices[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach(value => {

          if(!visitedVertices[value]){
            return depthFirstSearch(value)
          }
        })
  }

  depthFirstSearch(start)

  return result
}

};

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.depthFirstRecursion("A")
```
