/**
 * 1. Two pointer
 * 2. Set: maintain states, avoid useless calculation
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let l = s.length, max = 1, lo = 0, hi = 1, set = new Set();
    set.add(s.charAt(0));
    while (hi < l) {
        let temp = s.charAt(hi);
        if (set.has(temp)) {
            set.delete(s.charAt(lo));
            lo++;
        } else {
            set.add(temp);
            hi++;
            max = Math.max(max, hi - lo);
        }
    }
    return max;
};