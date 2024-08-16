/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

// Your code here
 const shortestWord = sentence => {
     let str = sentence.split(' ');
     let shortWord = str[0];

      for(let i = 1; i < str.length; i++) {
         if(str[i].length <= shortWord.length) {
             shortWord = str[i]
         }
      }
      return shortWord;
 };

// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
