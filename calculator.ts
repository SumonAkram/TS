class Calculator {
  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return num1 / num2;
  }
}

// Example usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(2, 6));  // Output: 12
console.log(calculator.divide(10, 2));   // Output: 5
