class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        this.stack.pop();
    }

    getMin() {
        return Math.min(...this.stack)
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
}