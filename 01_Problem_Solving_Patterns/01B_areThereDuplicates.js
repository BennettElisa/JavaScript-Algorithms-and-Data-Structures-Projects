function areThereDuplicates(...arg) {
  // arg passed in can be string or numbers etc.

  // build frequency obj
  const freqObj = {};

  // build cache
  arg.forEach(el => (freqObj[el] ? (freqObj[el] += 1) : (freqObj[el] = 1)));

  // check to see if any key:value pairs are greater than 1
  for (let key in freqObj) {
    if (freqObj[key] > 1) return true;
  }

  return false;
}

// One Liner Solution  💓

const areThereDuplicates = (...arg) => {
  return new Set(args).size !== args.length;
};
