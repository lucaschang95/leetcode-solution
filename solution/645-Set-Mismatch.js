/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        // Put value back, if find duplicate, skip
        while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
            // Find the right place for the current value
            // Exchange value
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    // Check which two value mismatch
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return [nums[i], i + 1];
    }
};

let ans1 = findErrorNums([3,2,2]);
console.log(ans1);