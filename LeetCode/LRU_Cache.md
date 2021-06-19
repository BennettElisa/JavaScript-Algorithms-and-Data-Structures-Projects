# Least Recently Used Cache

## KEY POINTS

- A cache's primary purpose is to increase data retrieval performance

## FEATURES

- Fixed-size cache capacity
- Items organized in order from most recently use to least recently used
- When the capacity has been reached the least recently used element is EVICTED aka removed

## USE CASE

- When using the macOS Finder the sidebar titled "RECENTS" is implemented based on the LRU cache under the hood

## LRU CACHE REQUIREMENTS

- Initialize the LRU cache with a positive size capacity
- get(int key): Return the value of the key if it exist otherwise return -1
- put(key, value): Update the value of the key if the key exists, otherwise add the key-value pair to cache
- If the number of keys exceeds the capacity, EVICT the least recently used key

## TIME COMPLEXITY

- Fast Accesses with O(1) and fast updates of O(1)
- get() : O(1) Constant Time
  put(): O(1) Constant Time

## SPACE COMPLEXITY

n = Capacity
Overall Space: O(n)

## REFERENCES

Youtube Video - https://www.youtube.com/watch?v=S6IfqDXWa10
Article - https://levelup.gitconnected.com/design-an-least-recently-used-cache-in-python-2f2d4a3fee6d

## Python

```

from collections import OrderedDict

class LRUCache(OrderedDict):

    def __init__(self, capacity: int):
        """
        :type capacity: int
        """
        self.capacity = capacity

    def get(self, key: int) -> int:
        """
        :type key: int
        """
        if key not in self:
            return -1
        self.move_to_end(key)
        return self[key]

    def put(self, key: int, value: int) -> None:
        """
        :type key: int
        :type value: int
        """
        if key in self:
            self.move_to_end(key)
        self[key] = value
        if len(self) > self.capacity:
            self.popitem(last = False)

```

## JavaScript

```
class LRUCache {
  constructor(capacity) {
    // use Map() Contructor and Data Structure
    // the cache becomes this Data Structure {key: value}
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  };
}

```
