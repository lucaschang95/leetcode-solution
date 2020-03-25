function sortScores(num, scores) {
  scores.sort((elementA, elementB) => {
    return elementB[1] - elementA[1];
  });
}
