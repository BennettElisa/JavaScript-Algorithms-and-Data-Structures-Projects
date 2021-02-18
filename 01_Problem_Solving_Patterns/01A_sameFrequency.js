function sameFrequency(n1, n2) {
  // convert numbers to strings
  let strNum1 = n1.toString();
  let strNum2 = n2.toString();

  // edge case
  if (strNum1.length !== strNum2.length) return false;

  // create an object to hold frequency count of each digit
  const obj = {};

  for (let num of strNum1) {
    obj[num] ? (obj[num] += 1) : (obj[num] = 1);
  }

  // iterate over second digit and compare to keys in obj
  for (let num of strNum2) {
    if (!(num in obj)) {
      return false;
    }
    if (obj[num] === 0) {
      return false;
    } else {
      obj[num]--;
    }
  }

  return true; // same number of frequencies
}
