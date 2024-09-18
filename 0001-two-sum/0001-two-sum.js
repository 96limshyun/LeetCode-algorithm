/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const newMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num;
        const sumIndex = newMap.get(complement)

        const isTarget = newMap.has(complement)
        if (isTarget) {
            return [i, sumIndex]
        }
        newMap.set(num, i)
    }
    return [-1, -1]
}