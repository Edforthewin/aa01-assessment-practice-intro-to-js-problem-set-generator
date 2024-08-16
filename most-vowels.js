/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here
const mostVowels = sentence => {
     let VOWELS = 'aeiouAEIOU';
     let str = sentence.split(' ');
     let bestCounter = 0;
     let bestWord = '';

      for(let i = 0; i < str.length; i++) {
        let word = str[i];
        let count = 0;

         for(let i = 0; i < word.length; i++) {
             let char = word[i];
              if(VOWELS.includes(char)) {
                count++
              }
         }
          if(count > bestCounter) {
             bestCounter = count;
             bestWord = word;
          }
      }
       return bestWord;
};

// console.log(mostVowels("what a wonderful life")); // "wonderful"
// console.log(mostVowels("the quick brown fox jumps")); // "quick"
// console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
