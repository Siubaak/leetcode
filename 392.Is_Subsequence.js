/**
 * https://leetcode.com/problems/coin-change/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const n = s.length;
  let l = -1, c = 0;
  for (let i of s) {
    l = t.indexOf(i, l + 1);
    if (l !== -1) c++;
    else return false;
  }
  return c === n;
};

console.log(isSubsequence('abc', 'ahbgdc'));