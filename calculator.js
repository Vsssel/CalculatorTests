class Calculator {
    add(num1, num2) {
        this.validateNumbers(num1, num2)
        return num1 + num2;
    }

    subtract(num1, num2) {
        this.validateNumbers(num1, num2)
        return num1 - num2;
    }

    multiply(num1, num2) {
        this.validateNumbers(num1, num2)
        return num1 * num2;
    }

    divide(num1, num2) {
        this.validateNumbers(num1, num2)
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }

    power(base, exponent) {
        this.validateNumbers(base, exponent)
        return Math.pow(base, exponent)
    }

    squareRoot(num) {
        this.validateNumber(num)
        if (num < 0) {
            throw new Error("Cannot take the square root of a negative number")
        }
        return Math.sqrt(num)
    }

    validateNumbers(...args) {
        for (let arg of args) {
            this.validateNumber(arg)
        }
    }

    validateNumber(num) {
        if (typeof num !== 'number') {
            throw new Error(`${num} is not a number`)
        }
    }
}

module.exports = Calculator
