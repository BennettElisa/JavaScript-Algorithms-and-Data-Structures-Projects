## Reverse Integer

## Big O - O(n) Linear Time

Looking at the parameter of x we can parameterize the work we need to do and approximate and tight upper bond.

```
var reverse = function(x) {

    let result = 0; // space O(1)

    if(x >= 0){
      // O(1), O(n), O(n), O(1)
        result = parseInt(x.toString().split('').reverse().join(''))
    } else {
        result = parseInt(x.toString().split('').reverse().join(''))  * -1
    }

    // contraints

    if(result < Math.pow(-2,31) || result > Math.pow(2,31) - 1) return 0

    return result

};
```
