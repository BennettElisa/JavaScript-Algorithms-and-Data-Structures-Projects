function isSubsequence(str1, str2) {
  // edge case
  if (str1.length > str2.length) return false;

  // create two pointers
  let i = 0;
  let j = 0;

  // iterater until we've reached the end of the first word
  while (str1[i]) {
    if (!str2[j]) return false;
    // check to see if pointer i === pointer j
    if (str1[i] !== str2[j]) j++;
    else {
      i++;
      j++;
    }
  }

  return true;
}
