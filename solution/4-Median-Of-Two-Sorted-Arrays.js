/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    if (m > n) return findMedianSortedArrays(nums2, nums1);

    let lo = 0, hi = m;
    
    while (lo <= hi) {
        let i = Math.floor((lo + hi) / 2);
        let j = Math.floor((m + n) / 2) - i;
        // i should move lo
        if (i > 0 && nums1[i - 1] > nums2[j]) hi = i - 1;
        else if (i < m && nums2[j - 1] > nums1[i]) lo = i + 1;
        else {
            // min value of right part
            let minRight;
            if (i === m) minRight = nums2[j];
            else if (j === n) minRight = nums1[i];
            else minRight = Math.min(nums1[i], nums2[j]);

            if ((m + n) % 2 === 1) return minRight;
            
            // max value of left part
            let maxLeft;
            if (i === 0) maxLeft = nums2[j - 1];
            else if (j === 0 ) maxLeft = nums1[i - 1];
            else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

            return (minRight + maxLeft) / 2;
        }
    }
};

let ans1 = findMedianSortedArrays([1, 2, 3], [1, 2, 3]);