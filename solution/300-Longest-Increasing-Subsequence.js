/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) return nums.length;
  let dpArray = new Array(nums.length), i = 0;
  //lengthArray[0] = 1;
  while (i < nums.length) {
    let currlength = 1, currValue = nums[i];
    for (let j = 0; j < i; j++) {
      if (currValue > nums[j]) {
        currlength = Math.max(currlength, dpArray[j] + 1);
      }
    }
    dpArray[i] = currlength;
    i++;
  }
  return lengthArray.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
};

lengthOfLIS([4,10,4,3,8,9]);