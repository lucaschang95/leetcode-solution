/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxL = 0, i = 0;
    while (i < nums.length) {
        let lo, hi;
        // Skip 0s
        while (i < nums.length && nums[i] === 0) i++;
        lo = i;
        // Skip 1s
        while (i < nums.length && nums[i] === 1) i++;
        hi = i;
        maxL = Math.max(maxL, hi - lo);
    }
    return maxL;
};

console.log(findMaxConsecutiveOnes([0]));