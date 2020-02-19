/**
 * Consideration:
 * 1. Positive or Negative
 * 2. Leading 0 or tailing 0
 * 3. Overflow
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0, isNagative = x < 0;

    while (x !== 0) {
        ans = ans * 10 + x % 10;
        if (ans < Math.pow(2, 31) * (-1) || ans > Math.pow(2, 31) - 1) return 0;
        if (isNagative) x = Math.ceil(x /10);
        else x = Math.floor(x /10);
    }

    return ans;
};

console.log(reverse(120));
