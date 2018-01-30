/**
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  const mk = Array(A.length);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    mk[i] = Array(B.length);
    for (let j = 0; j < B.length; j++) {
      if ((i === 0 || j === 0) && A[i] === B[j]) mk[i][j] = 1;
      else if (A[i] === B[j]) mk[i][j] = mk[i - 1][j - 1] + 1;
      else mk[i][j] = 0;
      max = Math.max(mk[i][j], max);
    }
  }
  return max;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));