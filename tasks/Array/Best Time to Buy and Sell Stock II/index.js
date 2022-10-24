/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > prices[i-1]) {
//             maxProfit += prices[i] - prices[i-1];
//         }
//     }
//     return maxProfit;
// };

//my solution
/**
//  * @param {number[]} prices
//  * @return {number}
//  */
var maxProfit = function (prices) {
  if (prices.length == 0) return 0;
  let i = 0;
  let allTimeProfit = 0;
  let currentProfit = 0;
  for (let j = 1; j < prices.length; j++) {
    if (currentProfit < prices[j] - prices[i]) {
      currentProfit = prices[j] - prices[i];
    } else {
      i = j;
      allTimeProfit += currentProfit;
      currentProfit = 0;
    }
  }

  if (currentProfit > 0) {
    allTimeProfit += currentProfit;
  }
  return allTimeProfit;
};
