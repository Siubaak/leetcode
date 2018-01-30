/**
 * https://leetcode.com/problems/longest-palindromic-subsequence/description/
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = Array(n);
  for (let i = n - 1; i > -1; i--) {
    dp[i] = Array(n);
    dp[i][i] = 1;
    if (i > 0) dp[i][i - 1] = 0;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }
  return dp[0][n - 1];
};

console.log(longestPalindromeSubseq('bbbab'));