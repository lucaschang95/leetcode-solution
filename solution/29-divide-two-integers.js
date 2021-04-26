/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    const positive = ( dividend > 0 && divisor > 0) || ( dividend < 0 && divisor < 0 );
    dividend = Math.abs(dividend), divisor = Math.abs(divisor);

    let result = 0, currResult, currDivisor;

    while (dividend >= divisor) {
        currResult = 1, currDivisor = divisor;
        while (dividend > currDivisor + currDivisor) {
            currResult += currResult;
            currDivisor += currDivisor;
        }
        // 此时dividend小于2倍divisor
        result += currResult;
        dividend -= currDivisor;
    }

    return positive ? result : 0 - result;
};

divide(10, 3);