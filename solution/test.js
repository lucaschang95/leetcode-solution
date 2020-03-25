// 1 / (time + 1)
function calculateStringDistance(expressionA, expressionB) {
    
  function calculateTimes(str1, str2) {
    let times = 0, i = 0, j = 0;
    if (str1 === '') return str2.length;
    if (str2 === '') return str1.length;

    // Find the first different character
    while (i < str1.length && j < str2.length) {
      if (str1.charAt(i) === str2.charAt(j)) {
        i++;
        j++;
      } else {
        break;
      }
    }
    const times1 = calculateTimes(str1.substring(i + 1), str2.substring(j + 1));
    const times2 = calculateTimes(str2.charAt(j).concat(str1.substring(i)), str2.substring(j + 1));
    const times3 = calculateTimes(str1.substring(i + 1), str2.substring(j + 1));
    return Math.min(times1, times2, times3) + 1;
  }

  let totalTimes = calculateTimes(expressionA, expressionB);
  const ans = (totalTimes + 1).toString();
  return '1/' + ans;
}

console.log(calculateStringDistance('abcdef', 'abcdefgH'));