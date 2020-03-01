/**
 * 不能使用动态规划, 应为需要指导每一种情况的详细信息
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
    let visited = new Array(N + 1).fill(false), count = 0;

    let calculate = function calculate(N, pos) {
        if (pos > N) count++;
        for (let i = 1; i <= N; i++) {
            if (!visited[i] && (pos % i === 0 || i % pos === 0)) {
                visited[i] = true;
                calculate(N, pos + 1, visited);
                visited[i] = false;
            }
        }
    };

    calculate(N, 1)

    return count;
};

console.log(countArrangement(7));