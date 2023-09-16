/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let num = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (num === nums[j]) {
                nums.splice(j, 1);
                j--;
            }
        }
    }
    return nums.length;
};