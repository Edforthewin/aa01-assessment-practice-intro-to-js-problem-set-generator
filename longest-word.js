/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

// Your code here
 const longestWord = sentence => {
    let str = sentence.split(' ');
    let longWord = str[0]

     for(let i = 1; i < str.length; i++) {
         if(str[i].length > longWord.length) {
            longWord = str[i];
         }
     }
     return longWord;
 };

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
