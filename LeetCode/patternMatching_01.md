# Pattern Matching w/ Native Map Data Structure

```
const patternMatch = (words, pattern) => {

    const results = []

    // iterate over the words
    for(let i = 0; i < words.length; i++){
        // check if the length of word in array matches the pattern
        // edge case

        if(words[i].length != pattern.length){
            // skip this iteration if it doesn't match length
            continue
        }

       if(isMatch(words[i], pattern)){
           results.push(words[i])
       }


    }

    return results

}

// 'aa', 'cc'
const isMatch = (word, pattern) => {

       // create data structure to store key value pairs of matches
    const hash = new Map()

    // iterate over the word (string) and look at each character
    for(let i = 0; i < word.length; i++){

        // if the letter from the pattern doesn't exist add to hash map
        if(!hash.has(pattern[i])){

            // set the key value pair for the mapping
            hash.set(pattern[i], word[i])
        }

        // if the letter does exist in the hash map make sure it matches the pattern letter
        //  it was orginally mapped to - if not - return false
        if(hash.get(pattern[i]) != word[i]){
            return false
        }
    }

    return true

}

patternMatch(["aac", "bbc", "bcb", "yzy"], "ghg")
(2) ["bcb", "yzy"]

```
