function palindrome(str) {
// replace all Non-alphanumeric characters (must be global) w/ ''
  let newStr = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "")

// base cases:
  if(!newStr) return true
  if(newStr[0] !== newStr[newStr.length - 1]) return false 
  
// recursive call: 
  return palindrome(newStr.slice(1, newStr.length-1))
}

console.log(palindrome("E---ye"));
