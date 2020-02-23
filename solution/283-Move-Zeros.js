/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, j = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            if (i !== j) nums[j] = nums[i];
            j++;
        }
        i++;
    }
    
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
};

let arr1 = [0,1,0,3,12];
moveZeroes(arr1);
console.log(arr1);

