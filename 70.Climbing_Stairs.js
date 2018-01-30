/**
 * https://leetcode.com/problems/climbing-stairs/description/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let m = Array(n);
  m[0] = 1;
  m[1] = 2;
  for (let i = 2; i < n; i++) {
    m[i] = m[i - 1] + m[i - 2];
  }
  return m[n - 1];
};

console.log(climbStairs(2));