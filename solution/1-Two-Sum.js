/**
 * map search in insertion order
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // check if target - nums[i] in the map
        // true: return, false: add self into the map
        if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
        else map.set(nums[i], i);
    }
};