/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let answer = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            answer.push(i);
        }
    }
    return answer;
};