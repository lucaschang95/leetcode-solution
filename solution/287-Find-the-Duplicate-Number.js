/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    slow = nums[slow];
    fast = nums[nums[fast]];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    let pre1 = 0, pre2 = slow;
    while (pre1 !== pre2) {
        pre1 = nums[pre1];
        pre2 = nums[pre2];
    }
    
    return pre1;
};