/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let lo = 0, hi = nums.length - 1, base = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const temp = nums[mid];
    if (temp < target) {
      lo = mid + 1;
    } else if (temp > target) {
      hi = mid - 1;
    } else {
      base = mid;
      break;
    }
  }

  if (base === -1) return [-1, -1];
  console.log('base', base);
  let start = base, end = base;

  console.log('lo: ', lo, ' start: ', start);
  while (lo <= start - 1) {
    const mid = lo + Math.floor((start - lo) / 2);
    const temp = nums[mid];
    if (temp < target) {
      lo = mid + 1;
    } else {
      start = mid;
    }
    console.log('lo: ', lo, ' start: ', start);
  }

  console.log('end: ', end, ' hi: ', hi);
  while (end <= hi - 1) {
    const mid = end + Math.ceil((hi - end) / 2);
    const temp = nums[mid];
    if (temp > target) {
      hi = mid - 1;
    } else {
      end = mid;
    }
    console.log('end: ', end, ' hi: ', hi);
  }

  return [start, end];
};

console.log(searchRange([5,7,7,8,8,10], 8));