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
  

//   // TODO: Define a function named evaluateReversePolishNotation that accepts an expression as a parameter
// function evaluateReversePolishNotation(expression){
//   // TODO: Initialize an empty array to act as the stack
//   let stack = [];
//   let tokens = expression.split(' ');
//   // TODO: Split the expression into tokens and iterate over them
//   for(let token of tokens){

//       // TODO: If the token is an operator ('+', '-'), pop the top two elements from the stack for operation
//       if (token === "+"){
//           // TODO: Based on the operator, perform the appropriate operation and push the result back onto the stack
//           let b = stack.pop();
//           let a = stack.pop(); 
//           stack.push(a + b);
//       } else if(token === "-"){
//           let b = stack.pop();
//           let a = stack.pop();
//           stack.push(a - b);
//       } else{
//           stack.push(parseInt(token));
//       }
//       // TODO: Otherwise, treat the token as an operand and push it onto the stack
//   }
//   // TODO: Return the top element of the stack as the result of the expression evaluation
//   return stack[0];
// }
// Example usage
// expression = "1 2 + 4 -"
// console.log(evaluateReversePolishNotation(expression))  // Expected output: -1