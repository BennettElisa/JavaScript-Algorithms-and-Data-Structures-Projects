# Find the longest Substring

- Important to note the difference between a **subsequence** and a **substring**.

  - If you have a string of "pwwkew":
  - "pwke" would be a subsequence
  - "wke" would be a substring

  # Instructions

  Given a string 's' find the length of the longest substring WITHOUT repeating characters. An empty string will return and output of zero. Output is an integer value of the length of the longest substring

  # Constraints

  0 <= s.length <= 5 \* 10^4
  's' consist of English letters, digits, symbols and spaces

  ```
  const lengthOfLongestSubstring = function(s) {

  let sLength = s.length // 10
  let result = 0
  let hashMap = {}
  let i = 0



  for( let j = 0; j < s.length; j++){
  	if(s[j] in hashMap){
  		i = Math.max(hashMap[s[j]], i)
  	}

  	result = Math.max(result, j-i+1)
  	hashMap[[s[j]]] = j + 1

  }

  return result

  }

  lengthOfLongestSubstring("abcabcbb") // 3
   lengthOfLongestSubstring("bbbbb") // 1
    lengthOfLongestSubstring("") // 0
     lengthOfLongestSubstring(" ") // 1

  ```
