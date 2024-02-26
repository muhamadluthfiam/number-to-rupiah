# Numeric Toolkit

Numeric Toolkit is a simple JavaScript library that provides functions for number formatting and basic mathematical operations. This library can be used to facilitate number manipulation in your applications.

## Installation

You can install Numeric Toolkit via npm:

```bash
npm install numeric-toolkit
```

## Usage

Below are examples of using the functions provided by Numeric Toolkit:

### Format Number

```javascript
import { formatNumber, unformatNumber } from 'numeric-toolkit';

console.log(formatNumber(10000)); // Output: '10,000'
console.log(unformatNumber('10,000')); // Output: 10000
```

### Mathematical Operations

```javascript
import { add, subtract, multiply, divide } from 'numeric-toolkit';

console.log(add(5, 10, 15)); // Output: 30
console.log(subtract(20, 5, 3)); // Output: 12
console.log(multiply(2, 3, 4)); // Output: 24
console.log(divide(20, 4)); // Output: 5
```

## Contribution

You can contribute to the development of Numeric Toolkit by submitting pull requests to the [GitHub repository](https://github.com/your-username/numeric-toolkit).

## License

Numeric Toolkit is licensed under the [MIT License](https://opensource.org/licenses/MIT).