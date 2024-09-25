/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        const len = cleanedString.length;
        
        for (let i = 0; i < len / 2; i++) {
            if (cleanedString[i] !== cleanedString[len - 1 - i]) {
                return false;
            }
        }
        return true;
}