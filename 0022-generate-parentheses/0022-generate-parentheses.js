/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    backTrack(n, 0, 0, "", res);
    return res;
};

function backTrack(n, openN, closeN, current, res) {
    if(n === openN && openN === closeN) return res.push(current)
    
    if(n > openN) {
        backTrack(n, openN + 1, closeN, current + "(", res)
    }
    
    if(openN > closeN) {
        backTrack(n, openN, closeN + 1, current + ")", res)
    }
}