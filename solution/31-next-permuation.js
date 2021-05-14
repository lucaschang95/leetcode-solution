/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    if (nums.length === 1) {
        return;
    }
    let exchange = helper(nums, 0);
    if (exchange) {
        let temp = nums[exchange[0]];
        nums[exchange[0]] = nums[exchange[1]];
        nums[exchange[1]] = temp;
    } else {
        for (let i = 0; i < (nums.length - 1) / 2; i++) {
            let temp = nums[i];
            nums[i] = nums[nums.length - 1 - i];
            nums[nums.length - 1 - i] = temp;
        }
    }
};

var helper = function(nums, start) {
    if (start === nums.length - 2) {
        if (nums[start] < nums[start + 1]) {
            return [start, start + 1]
        } else {
            return null;
        }
    } else {
        const prevResult = helper(nums, start + 1);
        if (prevResult) {
            return prevResult;
        } else {
            let temp;
            for (let i = nums.length -1; i > start; i--) {
                if (nums[i] > nums[start]) {
                    temp = i;
                    break;
                }
            }
            if (temp) {
                return [start, temp]
            } else {
                return null;
            }
        }
    }
}

const a1 = [1, 2, 3, 4, 5];
const a2 = [1, 3, 2];
nextPermutation(a2);
console.log(a2);