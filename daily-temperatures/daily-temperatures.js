var dailyTemperatures = function(T) {
    let stack = [];
    let answer = new Array(T.length).fill(0);
    for(let i = 0; i < T.length; i++) {
        while(stack.length && T[i] > T[stack[stack.length-1]]) {
            let temp = stack.pop();
            answer[temp] = i - temp;
        }
        stack.push(i);
    }
    return answer;
 };