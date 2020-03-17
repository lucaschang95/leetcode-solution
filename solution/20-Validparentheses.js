/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;
  let parenthesesStack = [], stringLength = s.length;
  for (let i = 0; i < stringLength; i++) {
    const tempChar = s.charAt(i);
    if (tempChar === '(' || tempChar === '{' || tempChar === '[') {
      parenthesesStack.push(tempChar);
    } else if (tempChar === ')') {
      if (parenthesesStack[parenthesesStack.length - 1] === '(') parenthesesStack.pop();
      else return false;
    } else if (tempChar === '}') {
      if (parenthesesStack[parenthesesStack.length - 1] === '{') parenthesesStack.pop();
      else return false;
    } else { // tempChar === ']'
      if (parenthesesStack[parenthesesStack.length - 1] === '[') parenthesesStack.pop();
      else return false;
    }
  }
  return parenthesesStack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid(''));
console.log(isValid('{[]}'));
console.log(isValid('([)]'));