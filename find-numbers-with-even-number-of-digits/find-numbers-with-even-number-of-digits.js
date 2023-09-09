/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let arr = String(nums).split(",");
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) {
            answer++;
        }
    }
    return answer;
};