/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {};

    for(const s of strs) {
        const sortedStr = s.split("").sort().join("");
        if(!result[sortedStr]) {
            result[sortedStr] = [];
        };

        result[sortedStr].push(s)
    }

    return Object.values(result);
};