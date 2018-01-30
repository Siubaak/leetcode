/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ret = 0, st = '', k = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    k = st.indexOf(s[i]);
    if (k !== -1) st = st.substring(k + 1)
    st += s[i];
    ret = ret < st.length ? st.length : ret;
  }
  return ret;
};

console.log(lengthOfLongestSubstring('abcabcbb'));