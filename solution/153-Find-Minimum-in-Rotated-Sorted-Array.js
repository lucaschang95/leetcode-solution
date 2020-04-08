/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let lo = 0, hi = nums.length - 1;

  while (true) {
    const loNum = nums[lo], hiNum = nums[hi];
    if (loNum < hiNum) return loNum;
    if (hi === lo + 1 || hi === lo) return hiNum;
    const mid = Math.floor(lo + (hi - lo) / 2);
    const midNum = nums[mid];
    if (midNum > loNum) lo = mid + 1;
    else if (midNum < loNum) hi = mid;
    console.log(lo, hi);
  }
};

console.log(findMin([3,4,5,1,2]));