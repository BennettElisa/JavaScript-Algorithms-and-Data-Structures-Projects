# Frequency Counter Pattern

### Time Complexity O(n) Linear Time

### Space Complexity O(1)

- Using **objects** or **sets** to compare data or **frequencies** of data.
- A native solution to some of these ends up be **O(n^2) Quadratic Time** because of the **nested loops** -
  - For loop
    - indexOf
    - includes
- Two SEPERATE loops is VASTLY better than two nested loops.

  - Which can make it **O(n) Linear Time**

- Key words that indicate a good use case:
  - compare frequencies
  - frequency
  - determine if a word is an annagram
  - compare number of values within an array
  - if numbers consistant of that same amount of digits
  - etc.

```
function same(arr1, arr2){

 // check the length to see if the array are the same length
    // if not return false

let freqCount1 = {}, freqCount2 = {}


for(let val of arr1){
    freqCount1[val] = (freqCount1[val] || 0) + 1
}

for(let val of arr2){
    freqCount2[val] = (freqCount2[val] || 0) + 1
}

console.log(freqCount1)
console.log(freqCount2)

for(let key in freqCount1){
    if(!(key ** 2 in freqCount2)){
        return false
    }

    if(freqCount1[key ** 2] !== freqCount2[key]){
        console.log(freqCount1[key ** 2], freqCount2[key])
        return false
    }
}

return true

}


same([1,2,3,2], [9,1,4,4])

//{1:1, 4:2, 9:1} {9:1, 1:1, 4:2}

```
