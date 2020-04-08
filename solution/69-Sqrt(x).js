/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  let lo = 0, hi = x;

  while (lo < hi) {
    const mid = lo + Math.ceil((hi - lo) / 2);
    if (mid * mid > x) hi = mid - 1;
    else lo = mid;
  }

  return lo;
};

console.log(mySqrt(4));
console.log(mySqrt(13));
console.log(mySqrt(15));
console.log(mySqrt(16));