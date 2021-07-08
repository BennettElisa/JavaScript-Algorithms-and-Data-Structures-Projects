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

    const hash = new Map()

    for (let i = 0; i < word.length; i++){

        if(!hash.has(word[i])){

             hash.set(word[i], pattern[i])

        }

        if (hash.get(word[i]) != pattern[i]){

             return false

        }
    }

    return true

}

patternMatch(["aac", "bbc", "bcb", "yzy"], "ghg")
(2) ["bcb", "yzy"]

```
