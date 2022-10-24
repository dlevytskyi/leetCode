/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     while(nums.length > 1) {
//         let x = nums[0];
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] == x) {
//                 nums.splice(i, 1);
//                 nums.splice(0, 1);
//                 break;
//             } else if (i == nums.length - 1) {
//                 return x;
//             }
//         }
//     }
//     return nums[0];
// };

let singleNumber = (nums) => {
  let xor = 0;

  nums.forEach((num) => {
    xor ^= num;
  });

  return xor;
};
