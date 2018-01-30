/**
 * https://leetcode.com/problems/knight-probability-in-chessboard/description/
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (N, K, r, c) {
  if (K === 0) return 1;
  const p = Array(K + 1).fill().map(x => Array(N).fill().map(x => Array(N).fill(0)));
  let result = 0;
  for (let i = 0; i <= K; i++) {
    if (i === 0) {
      p[i][r][c] = 1;
    } else {
      for (let ri = 0; ri < N; ri++) {
        for (let ci = 0; ci < N; ci++) {
          for (let mv of [[-2, -1], [-1, -2], [2, -1], [1, -2], [2, 1], [1, 2], [-2, 1], [-1, 2]]) {
            if (ri - mv[0] < N && ri - mv[0] > -1 && ci - mv[1] < N && ci - mv[1] > -1) {
              p[i][ri][ci] += p[i - 1][ri - mv[0]][ci - mv[1]] / 8;
            }
          }
          if (i === K) result += p[i][ri][ci];
        }
      }
    }
  }
  return result;
};

console.log(knightProbability(3, 2, 0, 0));