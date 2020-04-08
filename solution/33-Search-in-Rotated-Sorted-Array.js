/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi - 1) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const loNum = nums[lo], midNum = nums[mid], hiNum = nums[hi];
    if (midNum === target) return mid;
    if (midNum > loNum && midNum < hiNum) { // Case 1
      if (target < midNum) {
        hi = mid - 1;
        continue;
      } else {
        lo = mid + 1;
        continue;
      }
    } else if (midNum > hiNum) { // Case 2
      if (target < midNum && target >= loNum) {
        hi = mid - 1;
        continue;
      } else {
        lo = mid + 1;
        continue;
      }
    } else { // Case 3
      if (target > midNum && target <= hiNum) {
        lo = mid + 1;
        continue;
      } else {
        hi = mid - 1;
        continue;
      }
    }
  }
  if (lo === hi) return nums[lo] === target ? lo : -1;
  let ans = -1;
  if (nums[lo] === target) ans = lo;
  if (nums[hi] === target) ans = hi;
  return ans;
};

console.log(search([3, 5, 1], 3));