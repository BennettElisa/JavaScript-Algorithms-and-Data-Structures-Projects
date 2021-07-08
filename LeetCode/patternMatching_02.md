## Pattern Matching with Integer Array Data Structure

const findAndReplacePattern = (words, pattern) => {
const matches = []

    words.forEach(word => {
        if(isAligned(word, pattern)){
            matches.push(word)
        }
    })
    return matches;

}

const isAligned = (word, pattern) => {
// edge case
if(word.length !== pattern.length){
return false;
}
const wordToPattern = Array(256).fill(0)
const patternToWord = Array(256).fill(0)

    // for each step we build a cross mapping to see if it breaks

    for(let i = 0; i < word.length; i++){
        const wordChar = word.charAt(i).charCodeAt(0)
        const patternChar = pattern.charAt(i).charCodeAt(0)

        // if the array index of character code is zero than replace it with the pattern char
        if(wordToPattern[wordChar] == 0){
            wordToPattern[wordChar] = patternChar
        }

        if(patternToWord[patternChar] == 0){
            patternToWord[patternChar] = wordChar
        }

        if(wordToPattern[wordChar] != patternChar || patternToWord[patternChar] != wordChar){
            return false
        }
    }

return true

}

// findAndReplacePattern(['aa', 'bb'], 'cc')
// findAndReplacePattern(["aac", "bbc", "bcb", "yzy"], "ghg")
