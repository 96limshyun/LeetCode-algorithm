/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        arr.shift();
        let max = Math.max(...arr);
        answer.push(max);
        i--;
    }
    answer.splice(answer.length - 1, 1, -1);
    return answer;
};