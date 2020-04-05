/**
 * @param {number[]} nums: sorted, AESC
 * @param {number} target
 * @return {number} return index if founded, otherwise: return -1;
 */
var search = function(nums, target) {
  let ans = -1, lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const temp = nums[mid];
    if (temp === target) {
      ans = mid;
      break;
    }
    if (temp < target) lo = mid + 1;
    if (temp > target) hi = mid - 1; 
  }
  return ans;
};


console.log(search([-1,0,3,5,9,12], 2));