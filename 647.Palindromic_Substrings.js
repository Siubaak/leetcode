/**
 * https://leetcode.com/problems/palindromic-substrings/description/
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const t = '@#' + s.split('').join('#') + '#$';
  const p = new Array(t.length);
  let c = 0, r = 0, m = 0;
  for (let i = 0; i < t.length; i++) {
    p[i] = r > i ? Math.min(p[2 * c - i], r - i) : 0;
    while (t[i + p[i] + 1] === t[i - p[i] - 1]) p[i]++;
    if (i + p[i] > r)[c, r] = [i, i + p[i]];
    m += Math.floor((p[i] + 1) / 2);
  }
  return m;
};

console.log(countSubstrings('aaa'));