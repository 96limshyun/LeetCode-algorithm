/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}

    for (const num of nums) {
        map[num] = (map[num] || 0) + 1
    }
    const sortedArr = Object.entries(map).sort((a,b) => b[1] - a[1])
    const sliceArr = sortedArr.slice(0, k).map(cur => parseInt(cur[0]))
    return sliceArr
};