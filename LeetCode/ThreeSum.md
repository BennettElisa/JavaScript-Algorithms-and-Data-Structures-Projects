## Three Sum

Think hashtable or pointers as a possible solution. If you use the hashtable approach you can store the completement and index i.e target - item or you can store the actual number.

You can also approach this problem with a pointer approach which will require a sorted array.

```
const threeSum = function(nums){
  // declare variable to store the answer
  let result = []

  // check the length of array
  if(nums.length < 3) return result

  // sort the array
  nums.sort((a,b) => a-b)

  // iterate over array
  for(let i=0; i < nums.length - 2; i++){

    // if the sorted array value is greater than 0 than it will no longer sum up to zero
    if(nums[i] > 0) break;

    // to prevent repeats take the next number and compare it with the previous number if its the same them skip it
    if(i > 0 && nums[i] === nums[i-1]) continue;

    //declare pointers
    let j = i + 1
    let k = nums.length - 1

      // j should never get larger than k

      while(j < k){
        // declare variable to hold the sum of three numbers to check against target
        let sum = nums[i] + nums[j] + nums[k]
        // check to see if sum is equal to zero
        if(sum === 0){
          result.push([nums[i], nums[j],nums[k]])

        // this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].

        while(nums[j] === nums[j + 1]) j++
        while(nums[k] === nums[k - 1]) k++

        // move j forward and move k backwards
        j++
        k--

        } else if(sum < 0){
          j++
        } else if(sum > 0){
          k--
        }
      }
  }
  return result
};
```
