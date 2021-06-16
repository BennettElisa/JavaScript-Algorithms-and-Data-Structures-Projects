# Two Number Sum on Leet Code in JavaScript and Python

## JavaScript

## Runs at O(n) time and O(n) space

```
const twoNumSum = function(nums, target) {
    const hash = {};
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]]>=0){
            return [ hash[nums[i] ] , i]
        }
        hash[target-nums[i]] = i
    }
	// return [] // some want you to return an empty array if a match isn't found
};
```

```
const twoNumSum = function(nums, target) {
    const cache = {}
    for(let i = 0; i < nums.length; i+=1) {
      let num_diff = target - nums[i]
      if(num_diff in cache) {
        return [cache[num[i], i]]
      }
      cache[num] = i
    }
}

```

## Python

## Runs at O(n) time and O(n) space

```
        nums_hash = {}
        for i, num in enumerate(nums):
            potentialMatch = target - num
            <!-- if key "potentialMatch" is in the dic -->
            if potentialMatch in nums_hash:
                return [nums_hash[potentialMatch], i]
            nums_hash[num] = i
```
