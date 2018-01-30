/**
 * https://leetcode.com/problems/coin-change/description/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  coins = coins.filter(coin => coin <= amount);
  if (coins.length === 0) return -1;
  const dp = Array(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    dp[i] = Number.MAX_VALUE;
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));