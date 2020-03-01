/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        while (nums[i] !== nums[temp - 1]) {
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
            temp = nums[i];
        }
    }
            
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i] - 1) ans.push(i + 1);
    } 
    return ans;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));