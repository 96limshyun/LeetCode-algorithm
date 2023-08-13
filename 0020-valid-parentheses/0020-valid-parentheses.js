/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let stack = [];
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '['  ) {
            stack.push(s[i]);
            cnt++;
        } else {
            if (stack.length === 0) return false;

            let char = stack.pop();
            if (s[i] === ')' && char === '(' || s[i] === '}' && char === '{' || s[i] === ']' && char === '[') {
                cnt--
            }
        }
    }
	return cnt === 0;
};