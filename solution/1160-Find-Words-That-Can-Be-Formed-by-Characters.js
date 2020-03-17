/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const charSum = new Array(26);
  let ans = 0;
  charSum.fill(0);
  for (let i = 0; i < chars.length; i++) {
    const index = chars.charCodeAt(i) - 97;
    charSum[index] = charSum[index] + 1;
  }

  words.forEach((word) => {
    const tempCharSum = new Array(26);
    tempCharSum.fill(0);
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;
      tempCharSum[index] = tempCharSum[index] + 1;
    }
    let count = true;
    for (let i = 0; i < 26; i++) {
      if (tempCharSum[i] > charSum[i]) {
        count = false;
        break;
      }
    }
    if (count) ans += word.length;
  });

  return ans;
};

