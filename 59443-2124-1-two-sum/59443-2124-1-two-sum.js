/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const ck = target - num;
            const isNum = map.has(ck);
            
            if(isNum) return [i, map.get(ck)]

            map.set(num, i)
        }
};