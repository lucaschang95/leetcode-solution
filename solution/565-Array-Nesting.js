/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let ans = 1;
  const length = nums.length;
  const visited = Array(length);
  visited.fill(false);
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    let tempValue = nums[i], tempSize = 1;
    while (!visited[tempValue]) {
      visited[tempValue] = true;
      tempSize++;
      tempValue = nums[tempValue];
    }
    ans = Math.max(ans, tempSize);
  }
  return ans;
};

console.log(arrayNesting([5,4,0,3,1,6,2]));