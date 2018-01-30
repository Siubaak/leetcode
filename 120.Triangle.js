/**
 * https://leetcode.com/problems/triangle/description/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const m = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (i === n - 1) m[j] = triangle[i][j];
      else m[j] = Math.min(m[j], m[j + 1]) + triangle[i][j];
    }
  }
  return m[0];
};

console.log(minimumTotal(
  [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
  ]
));