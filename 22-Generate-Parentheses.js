/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const arr = generate('', n, 0, 0);
    console.log(typeof arr.toString());
};


function generate(str, n, number1, number2) {
    if (str.length === 2 * n) {
        return [str];
    }
    let ans = [];
    if (number1 < n) {
        ans = ans.concat(generate(str + '(', n, number1 + 1, number2));
    }
    if (number2 < number1) {
        ans = ans.concat(generate(str + ')', n, number1, number2 + 1));
    }
    return ans;
}

generateParenthesis(3);