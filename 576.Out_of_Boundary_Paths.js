/**
 * https://leetcode.com/problems/out-of-boundary-paths/description/
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function (m, n, N, i, j) {
  const dp = Array(N + 1).fill().map(x => Array(m).fill().map(y => Array(n).fill(0)));
  const M =  1000000007;
  let sum = 0;
  dp[0][i][j] = 1;
  for (let k = 1; k <= N; k++) {
    for (let p = 0; p < m; p++) {
      for (let q = 0; q < n; q++) {
        if (p > 0) {
          dp[k][p][q] = (dp[k][p][q] + dp[k - 1][p - 1][q]) % M;
        } else {
          sum = (sum + dp[k - 1][p][q]) % M;
        }
        if (q > 0) {
          dp[k][p][q] = (dp[k][p][q] + dp[k - 1][p][q - 1]) % M;
        } else {
          sum = (sum + dp[k - 1][p][q]) % M;
        }
        if (p < m - 1) {
          dp[k][p][q] = (dp[k][p][q] + dp[k - 1][p + 1][q]) % M;
        } else {
          sum = (sum + dp[k - 1][p][q]) % M;
        }
        if (q < n - 1) {
          dp[k][p][q] = (dp[k][p][q] + dp[k - 1][p][q + 1]) % M;
        } else {
          sum = (sum + dp[k - 1][p][q]) % M;
        }
      }
    }
  }
  return sum;
};

console.log(findPaths(3, 3, 3, 1, 0));