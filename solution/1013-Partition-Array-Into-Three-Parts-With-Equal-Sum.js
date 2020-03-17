/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  if (A.length < 4) return false;

  let totalSum = 0;
  A.forEach((element) => {
    totalSum += element;
  });

  const expectedPartialSum = totalSum / 3;
  let tempSum = A[0], i = 0;

  while (i < A.length - 1 && tempSum !== expectedPartialSum) {
    i++;
    tempSum += A[i];
  }

  tempSum = A[A.length - 1];
  let j = A.length - 1;
  while (j > 0 && tempSum !== expectedPartialSum) {
    j--;
    tempSum += A[j];
  }

  return i >= 0 && j < A.length && i < j -1;
};

// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])); // true
// console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])); // false
// console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])); // true
console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])); // true