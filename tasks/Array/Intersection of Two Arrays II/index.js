/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let smallerArr, biggerArr;
  //selecting smaller array
  if (nums1.length > nums2.length) {
    smallerArr = nums2;
    biggerArr = nums1;
  } else {
    smallerArr = nums1;
    biggerArr = nums2;
  }

  let interArr = [];
  for (let i = 0; i < smallerArr.length; i++) {
    let smallEl = smallerArr[i];
    for (let j = 0; j < biggerArr.length; j++) {
      if (smallEl == biggerArr[j]) {
        interArr.push(smallEl);
        biggerArr[j] = -1;
        break;
      }
    }
  }
  return interArr;
};
