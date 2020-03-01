/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        while (i !== temp - 1 && nums[temp - 1] !== temp) {
            // Exchange nums[i] and nums[temp - 1]
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
            temp = nums[i];
        }
    }

    nums.forEach(function(num, id) {
        if (num !== id + 1) res.push(num);
    });
    
    return res;
};

let arr = [4,3,2,7,8,2,3,1];

findDuplicates(arr);
