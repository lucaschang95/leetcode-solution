/**
 * @param {number} n n values
 * @param {number} k k distinct difference values
 * @param {number} lo current low value
 * @param {number} hi current high value
 * @return {number[]} result
 */
var constructArray = function(n, k) {
  let res = [];

  let  i = 0;
  while (i <= n - k - 2) {
    res.push(i + 1);
    i++;
  }

  let lo = i + 1, hi = n, lowSide = true; 
  while (i < n) {
    if (lowSide) {
      res[i] = lo;
      lo++;
    } else {
      res[i] = hi;
      hi--;
    }
    lowSide = !lowSide;
    i++;
  }

  return res;
};

console.log(constructArray(8, 4));