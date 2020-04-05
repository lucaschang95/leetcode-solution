/**
 * @param {number[]} arr
 * @return {number} most number of chunks
 */
var maxChunksToSorted = function(arr) {
  if (arr.length === 0) return 0;
  let chunks = 1, currChunkEndIndex = 0;
  arr.forEach((element, index) => {
    if (index > currChunkEndIndex) {
      chunks++;
      currChunkEndIndex = element;
    } else {
      currChunkEndIndex = Math.max(currChunkEndIndex, element);
    }
  });
  return chunks;
};

console.log(maxChunksToSorted([1,0,2,3,4]));

