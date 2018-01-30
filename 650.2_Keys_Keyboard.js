/**
 * https://leetcode.com/problems/2-keys-keyboard/description/
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let s = 0;
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      s += i;
      n /= i;
    }
  }
  return s;
};

console.log(minSteps(3));