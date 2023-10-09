/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxNum = 0;
    nums.sort((a,b) => a - b)
    const set = new Set(nums);
    if ([...set].length < 3) {
        return [...set].pop()
    } else {
        maxNum = (Math.max(...set));
        return [...set][[...set].indexOf(maxNum) - 2];
    }
};