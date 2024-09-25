/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const newNums = new Set(nums)
    let result = 0;
    
    for(const num of nums){
        if(!newNums.has(num - 1)){
            let longs = 1;
            while(newNums.has(num + longs)) {
                  longs++
            }
            result = Math.max(longs, result)
        }
    }
    return result
};