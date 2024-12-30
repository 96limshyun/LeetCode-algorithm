/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map()
        
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const isNum = map.has(num)

            if(isNum) {
                return true;
            }

            map.set(num, true)
        }
        return false;
};