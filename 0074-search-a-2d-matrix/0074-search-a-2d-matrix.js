/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const ROW = matrix.length;
    const COL = matrix[0].length;

    let top = 0;
    let bot = ROW - 1;

    while(top <= bot) {
        const mid = Math.floor((top + bot) / 2)
        if(target > matrix[mid][COL - 1]) {
            top = mid + 1
        } else if (target < matrix[mid][0]) {
            bot = mid - 1
        } else {
            break;
        }
    }

    if(!(top <= bot)) {
        return false;
    }

    const row = Math.floor((top + bot) / 2)
    
    let left = 0;
    let right = COL - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(target > matrix[row][mid]) {
            left = mid + 1
        } else if (target < matrix[row][mid]) {
            right = mid - 1
        } else {
            return true
        }
    }

    return false
};