var maxDepth = function(root) {
  if (root === null) return 0;
  let temp = [root];
  let depth = 1;

  while (true) {
    const next = [];
    temp.forEach((node) => {
      if (node.left !== null) {
        next.push(node.left);
      }
      if (node.right !== null) {
        next.push(node.right);
      }
    });

    if (!next.length) {
      break;
    } else {
      temp = next;
      depth++;
    }
  }

  return depth;
};


var maxDepth = function(root) {
  if (root === null) return 0;
  return helper(root);
};

var helper = function(root) {
  if (root.left === null && root.right === null) return 1;
  if (root.left === null) return helper(root.right) + 1;
  if (root.right === null) return helper(root.left) + 1;
  return Math.max(helper(root.left), helper(root.right)) + 1;
};