/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

// Your code here
const initials = name => {
    let str = name.split(' ');

     for(let i = 0; i < str.length; i++) {
        let names = str[i]
        str[i] = names[0].toUpperCase();
     }
     return str.join('')
};

// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
