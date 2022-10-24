/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] == 9) {
    let reversedDigits = digits.reverse();
    for (let i = 0; i < reversedDigits.length; i++) {
      let digit = reversedDigits[i];
      if (digit == 9) {
        reversedDigits[i] = 0;
        if (i == reversedDigits.length - 1) {
          reversedDigits.push(1);
          break;
        }
      } else {
        reversedDigits[i] = digit + 1;
        break;
      }
    }
    digits = reversedDigits.reverse();
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  }
  return digits;
};

console.log(plusOne([9, 8, 9]));
