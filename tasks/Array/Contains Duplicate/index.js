/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  return false;

  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < nums.length; i++) {
  //     if (i + 1 <= nums.length -1 && nums[i] == nums[i+1]) return true
  // }
  // return false;
};
