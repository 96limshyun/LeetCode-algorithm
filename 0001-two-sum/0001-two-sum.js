/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        const hasDiff = map.has(diff);

        if(hasDiff) {
            return [map.get(diff), i]
        }

        map.set(num, i)
    }    
};