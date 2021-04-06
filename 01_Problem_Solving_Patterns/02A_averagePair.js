function averagePair(arr, tgtAvg) {
  // it's a sorted array
  if (!arr.length) return false;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sumAvg = (arr[i] + arr[j]) / 2;
    if (sumAvg === tgtAvg) return true;
    else if (sumAvg < tgtAvg) i++;
    else j--;
  } // other wise return false
  return false;
}

averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([1, 2, 3], 2.5); // true
averagePair([], 4.1); //  false
