/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const SMap = {}
    const TMap = {}

    for (let i = 0; i < s.length; i++) {
        SMap[s[i]] = (SMap[s[i]] || 0) + 1
        TMap[t[i]] = (TMap[t[i]] || 0) + 1
    }

    for (const S in SMap) {
        if(SMap[S] !== TMap[S]) return false
    }
    return true
};