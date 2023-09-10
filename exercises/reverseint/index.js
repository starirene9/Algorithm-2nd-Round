// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5 // 0 should be disappeared
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//  both input and output should be integer
//  toString() <-turn a num into string, parseInt function
//  Math.sign(num) : num positive 1, num negative -1

function reverseInt(n) { // -12
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed)*Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) { // -12
//     const reversedNum = n.toString().split('').reverse().join(''); // 21-
//     // console.log(Math.sign(parseInt(reversedNum)))
//     if (n < 0) {  //음수라면
//         return parseInt(reversedNum) * -1
//     }
//     return parseInt(reversedNum);
// }

// function reverseInt(n) { // -12
//     const reversedNum = n.toString().split('').reverse().join(''); // 21-
//
//     return parseInt(reversedNum) * Math.sign(n);
// }