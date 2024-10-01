function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) {
                return a / b;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operation";
    }
}

// テスト
console.log(calculate('add', 5, 3));      // 8
console.log(calculate('subtract', 10, 4)); // 6
console.log(calculate('multiply', 2, 6)); // 12
console.log(calculate('divide', 15, 3));  // 5
console.log(calculate('divide', 10, 0));  // Error: Division by zero