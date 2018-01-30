/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  function bi(array, target) {
    let min = 0, max = array.length - 1;
    let mid = 0;
    while (min <= max) {
      mid = parseInt((min + max) / 2);
      if (target === array[mid]) {
        return mid;
      } else if (target < array[mid]) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    return max;
  }
  let k = 0, sum = [];
  function output() {
    if (sum.length % 2 === 0) {
      const o = sum.length / 2;
      return (sum[o - 1] + sum[o]) / 2;
    } else {
      const o = (sum.length - 1) / 2;
      return sum[o];
    }
  }
  for (let i in nums2) {
    k = bi(nums1, nums2[i]);
    sum = sum.concat(nums1.slice(0, k + 1));
    nums1 = nums1.slice(k + 1);
    if (nums1.length) {
      sum.push(nums2[i]);
    } else {
      sum = sum.concat(nums2.slice(i));
      return output();
    }
  }
  sum = sum.concat(nums1);
  return output();
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));