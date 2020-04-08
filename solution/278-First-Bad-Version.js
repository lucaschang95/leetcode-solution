/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let lo = 1, hi = n;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      const isBad = isBadVersion(mid);
      if (!isBad) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  };
};