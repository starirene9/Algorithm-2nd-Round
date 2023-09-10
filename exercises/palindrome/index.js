// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false "gfedcba" <- not a palindrome

function palindrome(str) {

}

module.exports = palindrome;

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// every array helper : is every value greater than 5?
// array.every((val)=> val > 5);

// function palindrome(str) {
//     return str.split('').every((char,i)=>{ // i = 0
//         return char === str[str.length-i-1];
//     })
// }