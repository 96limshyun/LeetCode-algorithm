/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;

    let upArr = 0;
    let downArr = arr.length - 1;

    while (arr[upArr] < arr[upArr + 1]) {
        upArr++;
    }
    while (arr[downArr] < arr[downArr -1]) {
        downArr--;
    }
    return upArr === downArr && upArr !== 0 && downArr !== arr.length - 1;
};