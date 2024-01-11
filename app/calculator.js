// exports.calculate = function(expression) {
//     const tokens = expression.split(' ');
//     const evaluate = (index) => {
//         const token = tokens.shift();
//         if (token == '+' || token == '-' || token == '*' || token == '/') {
//             const operand1 = evaluate(index + 1);
//             const operand2 = evaluate(index + 2);

//             switch (token) {
//                 case '+':
//                     return operand1 + operand2;
//                 case '-':
//                     return operand1 - operand2;
//                 case '*':
//                     return operand1 * operand2;
//                 case '/':
//                     return operand1 / operand2;
//                 default:
//                     return NaN;
//             }
//         } else {
//             return parseFloat(token);
//         }
//     }
//     return evaluate(0);
// }

//alternative solution
exports.calculate = function calculate(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      };
    const stack = [];
    const tokens = expression.split(' ');
  
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
      if (!operators[token]) {
        // operand
        stack.push(Number(token));
      } else {
        // operator
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const result = operators[token](operand1, operand2);
        stack.push(result);
      }
    }
  
    return stack[0];
  }
  