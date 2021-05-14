/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const results = [];
    candidates.forEach((candidate, index, arr) => {
        // 小于的话，返回空
        if (candidate === target) {
            results.push([candidate]);
        } else if (candidate < target) {
            const prevResults = combinationSum(arr.slice(0, index + 1), target - candidate);
            prevResults.forEach((prevResult) => {
                results.push([...prevResult, candidate]);
            });
        }
    });
    return results;
};
