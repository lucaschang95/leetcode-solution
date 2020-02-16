/**
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    let ans = '', periodL = 2 * numRows - 2, period, id;
    
    //first line
    period = 0;
    id = 0;
    while (id < s.length) {
        ans += s.charAt(id);
        id += periodL;
    }

    //middle lines
    for (let i = 1; i <= numRows - 2; i++) {
        period = 0;
        id = i;
        while (id < s.length) {
            ans += s.charAt(id);
            id = (period + 1) * periodL - i;
            if (id < s.length) ans += s.charAt(id);
            period++;
            id = period * periodL + i;
        }
    }


    //last line(if not overlap with first line)
    period = 0;
    id = numRows - 1;
    while (id < s.length) {
        ans += s.charAt(id);
        id += periodL;
    }

    return ans;
};

let ans1 = convert('PAYPALISHIRING', 3);