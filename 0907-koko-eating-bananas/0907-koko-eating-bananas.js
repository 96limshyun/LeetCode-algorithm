/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles)
    let res = 0;

    while(left <= right) {
        const k = Math.floor((left + right) / 2)
        let totalK = 0;
        piles.forEach(cur => {
            totalK += Math.ceil(cur / k)
        })

        if(totalK <= h) {
            res = k
            right = k - 1;
        } else {
            left = k + 1
        }
    }
    return res
};