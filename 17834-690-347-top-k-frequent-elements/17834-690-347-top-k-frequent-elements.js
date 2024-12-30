/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}

    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1
    }
    const result =Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0, k)
    return result.map(cur => Number(cur[0]))
};