/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let answer = 0;
    let cnt = 0;
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] !== 0) {
            cnt++;
        } else {
            answer = Math.max(cnt, answer);
            cnt = 0;
        }
    }
    return Math.max(cnt, answer);
};