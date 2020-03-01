/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = new Map(), degree = -1, res = -1;

    nums.forEach((num, id) => {
        if (!map.has(num)) {
            // Insert into Map
            map.set(num, [1, id, id]);
        } else {
            // Update
            const tempValue = map.get(num);
            map.set(num, [tempValue[0] + 1, Math.min(id, tempValue[1]), Math.max(id, tempValue[2])]);
        }
    });

    map.forEach((value, key) => {
        if (value[0] > degree) {
            degree = value[0];
            res = value[2] - value[1] + 1;
        } else if (value[0] === degree) {
            res = Math.min(res, value[2] - value[1] + 1);
        }
    });

    return res;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));