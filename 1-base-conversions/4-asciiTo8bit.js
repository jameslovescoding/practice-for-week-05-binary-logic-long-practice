const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/
const convertToBase2 = element => {
  // Your code here
  if (typeof element === 'string'){
    let decimal = parseInt(element, 16);
    return decimal.toString(2);
  }
  return element.toString(2);
};


const asciiTo8bit = str => {
  // Your code here
  let newArray = str.split('');
  let asciiValues = newArray.map(val => val.charCodeAt());
  return asciiValues.map(val => addZeros(convertToBase2(val), 8)).join('');
};


/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
