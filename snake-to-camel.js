/*
Write a function snakeToCamel that takes in a snake_cased string and returns a
PascalCased version of the string. snakecase is where each word is separated
with underscores (``). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.
*/

// Your code here
 const snakeToCamel = str => {
     let newStr = str.split('_');

      for(let i = 0; i < newStr.length; i++) {
         let char = newStr[i];
         newStr[i] = char[0].toUpperCase() + char.slice(1).toLowerCase()
      }
      return newStr.join('')
 };

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = snakeToCamel;
