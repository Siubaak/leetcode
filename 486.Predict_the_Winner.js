/**
 * https://leetcode.com/problems/predict-the-winner/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  const len = nums.length;
  const dp = Array(len).fill().map(x => Array(len).fill(0));
  for (let i = 0; i < len; i++) {
      dp[i][i] = nums[i];
  }
  for (let i = len - 2; i >= 0; i--) {
      for (let j = i + 1; j < len; j++) {
          dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
      }
  }
  return dp[0][len - 1] >= 0;
};

console.log(PredictTheWinner([ 1, 5, 2 ]));