/**
 * 1. Specical cases
 * 2. Palindrome
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) return true;
    if (x < 0 || x % 10 === 0) return false;

    let right = 0;

    while (x > right) {
        temp = x % 10;
        x = Math.floor(x / 10);
        right *= 10;
        right += temp;
    }

    return x === right || Math.floor(right / 10) === x;
};

//console.log(isPalindrome(121));
//console.log(isPalindrome(-121));
console.log(isPalindrome(0));