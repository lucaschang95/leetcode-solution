/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const arr = [];
  for (let i = 0; i < tokens.length; i++) {
    // Number: push into stack
    // Operator: pop, operate, push
    const token = tokens[i];
    const num = parseInt(token, 10);
    if (!isNaN(num)) {
      arr.push(num);
    } else {
      let oprand2 = arr.pop();
      let oprand1 = arr.pop();
      switch (token) {
        case '+':
          arr.push(oprand1 + oprand2);
          break;
        case '-':
          arr.push(oprand1 - oprand2);
          break;
        case '*':
          arr.push(oprand1 * oprand2);
          break;
        case '/':
          arr.push(Math.floor(oprand1 / oprand2));
          break;
        default:
          // Throw error
          break;
      }
    }
  }
  return arr.pop();
};