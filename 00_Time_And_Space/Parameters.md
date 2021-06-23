# Impact on time and space complexity

Your parameters are the key things to look at when determining the efficiency of an algorithm

We want to look at functions to see their behavior to track their resource consumption

```

function (n) {
  for(let i = 0; i < 10; i++){
    // do O(1) work
  }
}

```

When changing the size of the input doesn't change what we control in the function it is then O(1) Constant Time

```

function (n) {
  for(let i = 0; i < n; i++){
    // do O(n)
  }
}

```

Now the for loop is contigent on n and that is based on our parameter and what we pass in as "n" so this will have O(n) - Linear Time

```

function (n) {
  for(let i = 0; i < 2 * n; i++){
    // do O(n)
  }
}

```
