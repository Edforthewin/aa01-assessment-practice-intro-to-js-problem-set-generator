/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here
 const removeLastVowel = word => {
    let VOWELS = 'aeiouAEIOU'
     let str = word.split('');

      for(let i = str.length - 1; i >= 0; i--) {
         if(VOWELS.includes(str[i])) {
            str.splice(i, 1);
            return str.join('')
         }
      }
      return word;
 };

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
