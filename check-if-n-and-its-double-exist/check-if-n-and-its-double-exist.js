/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = 2 * arr[i];
        console.log(num);
        for (let j = 0; j < arr.length; j++) {
            if (num === arr[j] && i != j) {
                return true;
            } else {
                continue;
            }
        }
    }
    return false;
};
