function isPalindrome (word){
    for (let index = 0; index < word.length/2; index++) {
        if(word[index] != word[word.length-1-index]) return false;
    };
    return true;
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("kajak"));
console.log(isPalindrome("despair"));