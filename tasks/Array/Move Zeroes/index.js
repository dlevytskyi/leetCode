/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// FIRST SOLUTION
// var moveZeroes = function (nums) {
//   let nonZeroes = 0;
//   let zeroes = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     if (num == 0) {
//       nums.splice(i, 1);
//       nums.push(0);
//       zeroes++;
//       if (
//         i < nums.length - 1 &&
//         nums[i] == 0 &&
//         nonZeroes + zeroes < nums.length
//       ) {
//         i--;
//       }
//     } else {
//       nonZeroes++;
//     }
//   }
//   return nums;
// };

// SECOND SOLUTION (MORE OPTIMIZED)
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] == 0) {
      count++;
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
