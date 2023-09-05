// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) { // apple
   return str.split('').reduce((rev, char)=> char + rev, '')
}

reverse('bitna');

module.exports = reverse;

// return str.split('').reverse().join('');

// function reverse(str) {
//     let reversed = '';
//     for ( let char of str) { // apple
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, char)=>{
//         return char + reversed;
//     }, '');
// }

// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev,'');
// }

// debugger, cont, exit cntrl c