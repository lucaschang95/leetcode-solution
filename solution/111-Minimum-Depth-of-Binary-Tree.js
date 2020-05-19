

var minDepth = function(root) {
  if (root === null) return 0;
  let depth = 1, terminate = false;
  let tempLevel = [root];

  while (true) {
    const nextLevel = [];
    tempLevel.forEach((node) => {
      if (node.left === null && node.right === null) terminate = true;
      if (node.left !== null) nextLevel.push(node.left);
      if (node.right !== null) nextLevel.push(node.right);
    });
    if (terminate) return depth;
    depth++;
    tempLevel = nextLevel;
  }
};

var test = function() {
  while (true) {
    return 0;
  }
  return 1;
};

console.log(test());