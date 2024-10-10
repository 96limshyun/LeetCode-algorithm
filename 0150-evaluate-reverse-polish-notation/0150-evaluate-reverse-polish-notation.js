/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = "+-*/"
    const stack = [];
    
    for (const token of tokens) {
        if(operators.includes(token) && stack.length >= 2) {
           const second = stack.pop()
           const first = stack.pop()
           switch(token) {
               case "+":
               stack.push(first + second)
               break;
                   case "-":
               stack.push(first - second)
               break;
                   case "*":
               stack.push(first * second)
               break;
                   case "/":
               stack.push(Math.trunc(first / second))
               break;
           }
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0]
};