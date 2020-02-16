/**
 * 中心扩展算法(利用对称), 动态规划
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === '') return '';
    let ans = s.charAt(0), maxL = 1;
    for (let i = 0; i < s.length - 1; i += 0.5) {
        let lo = Math.ceil(i), hi = Math.floor(i), tempL = 1;
        while (lo >= 0 && hi <= s.length - 1 && s.charAt(lo) === s.charAt(hi)) {
            tempL = hi - lo + 1;
            lo--;
            hi++;
        }
        if (tempL > maxL) {
            ans = s.substring(lo + 1, hi);
            maxL = tempL;
        }
    }
    return ans;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));