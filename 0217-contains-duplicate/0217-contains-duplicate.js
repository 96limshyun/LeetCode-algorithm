/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const hasNum = set.has(num)
        if(hasNum) {
            return true
        }
        set.add(num)
    }
    return false
};