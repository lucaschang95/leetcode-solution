let winRate;
function main(n, m) {
  winRate = new Array(n);
  for (let i = 0; i < n; i++) {
    winRate[i] = new Array(m);
    winRate[i].fill(-1);
  }

  for (let i = 0; i < n; i++) { winRate[i][0] = 1;}
  winRate[0].fill = 0;

  let ans = getWinRate(n, m);
  ans = ans.toString();
  console.log(ans);
}

function getWinRate(n, m) {
  if (winRate[n - 1][m - 1] !== -1) return winRate[n - 1][m - 1];

  // A get one
  let aGot = n / (n + m);
  // A not get one, if m = 1, b win
  if (m === 1) {
    winRate[n - 1][m - 1] = aGot;
    return aGot;
  }

  // B get one
  let bGot = (1 - aGot) * (n / (n + m - 1));

  // A B not get one
  if (m === 2) {
    winRate[n - 1][m - 1] = 1 - aGot - bGot;
    return 1 - aGot - bGot;
  }

  // B throw correct
  let throwCorrect = (1 - aGot - bGot) * (n / (n + m - 2));
  // A B not get one, B throw false
  let throwNotCorrect = 1 - aGot - bGot - throwCorrect;

  ans =  aGot + getWinRate(n - 1, m - 2) * throwCorrect + getWinRate(n , m - 3) * throwNotCorrect;
  winRate[n - 1][m - 1] = ans;
  return ans;
}

main(2, 3);


