/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let s = Array(nums.length);
  let f = Array(nums.length);
  s[0] = Math.max(nums[0], 0);
  f[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    f[i] = Math.max(f[i - 1], s[i - 1] + nums[i]);
    s[i] = Math.max(s[i - 1] + nums[i], 0);
  }
  return f[nums.length - 1];
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))