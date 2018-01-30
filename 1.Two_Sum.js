/**
 * https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = {};
  let p;
  for (let i = 0, l = nums.length; i < l; i++) {
    p = target - nums[i];
    if (m[p] !== undefined) return [m[p], i];
    m[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));