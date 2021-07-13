## Graphs

A collection of nodes and the connection between the nodes
No starting point, no parent node

## Uses for Graphs

- Social Networkings
- Location/ Mapping
- Routhing Algorithms
- Visual hierarchy
- File system optimization
- Recommendations tend to be stored with graph structure
- Maps

## Types of Graphs

_Vertex_ - a node
_Edge_ - connection between the node
_Weighted/Unweightes_ - values assigned to distances between vertices
_Directed/Undirected_ - directions assigned to distanced between vertices

## Storing Graphs: Adjacency Matrix

- Nodes
- Connections

Two standard approaches -

1. Adjacency Matrix
2. Adjacency List

Recap of a **matrix** it's a two dimentional structure with rows and columns

## Adjacency List

An array or a list is used to store the edges. However what if you need more than indexes in an array to actually reference the node you can also use a **Hashtable** with key value pairs

```
{
  A: ["B", "F"],
  B: ["A", "C"],
  C: ["B", "D"],
  etc.
}

```

## Differences and BIG O

|V| - Number of vertices
|E| - Number of Edges

```
Operation | Adjacency List | Adjacency Matrix

Add Vertex |    O(1)        | O((|V^2|))
Add Edge   |    O(1)        | O(1)
Remove Vertex | O(|V| + |E|)| O(|V^2|)
Remove Edge |   O(|E|)      | O(1)
Query       |   O(|V| + |E|)| O(1)
Storage     |   O(|V| + |E|)| O(|V^2|)

```

## Adjacency List vs. Adjacency Matrix

- Can take up less spaces (in sparse graphs)
- Faster to iterate over all the edges
- Looking up a specific edge to see if it exist can be slow
- If I query a particular vertices to see if there is a connection I will still need to then iterate over the array stored at that key value pair or stored at that index. So the time complexity to query an adjacency list is O([Vertices] + [Edges]) because it depends on BOTH

## Adjacency Matrix vs Adjacency List

- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

## Real World Data Tends to be SPARSE --> ton of nodes, lots of vertices but usually they're not all connected which lends itself to adjaceny list

## Graph Class

```
class Graph {
  constructor(){
    // this will store the actual edges
    this.adjacencyList = {}
  }

  // add a vertex method - we have to add a vertex before we can add an edge
  addVertex(vName){
    // add a key to the adjacency list with name of vertext and set value to empty array
    this.adjacencyList[vName] = []
  }

// our edge will represent a flight from one city to another
// the method will accept to vertices v1 and v2
    addEdge(v1, v2){
        // find in the list the key of v1 and push v2 into that array
        // find the list the key of v2 and push v1 to the array

            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)

    }


}


```
