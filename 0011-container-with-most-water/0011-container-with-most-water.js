/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let l = 0;
    let r = height.length - 1;
    
    while(l < r) {
        const w = r - l;
        const h = Math.min(height[l], height[r])
        result = Math.max(result, w * h)
        
        if(height[l] <= height[r]) {
            l++   
        } else {
            r--
        }
    }
    return result
};