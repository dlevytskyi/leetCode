/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// INIT SOLUTION
// var twoSum = function (nums, target) {
//   let answer = [];
//   for (let i = 0; i < nums.length; i++) {
//     let el = nums[i];
//     let secondEl = nums.indexOf(target - el);
//     if (secondEl > -1 && secondEl != i) {
//       answer.push(i, secondEl);
//       break;
//     }
//   }

//   return answer;
// };

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.get(num) != undefined) {
      return [map.get(num), i];
    } else {
      map.set(target - num, i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
