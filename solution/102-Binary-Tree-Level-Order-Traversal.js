/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const stack = [], ans = [];
  if (!root) return ans;
  stack.push(root);

  while (stack.length) {
    // Start of every level
    const nodeSum = stack.length, levelAns = [];
    for (let i = 0; i < nodeSum; i++) {
      // Start of every node
      const tempNode = stack.shift();
      levelAns.push(tempNode.val);
      if (tempNode.left) stack.push(tempNode.left); 
      if (tempNode.right) stack.push(tempNode.right); 
      // End of every node
    }
    ans.push(levelAns);
    // End of every level
  }

  return ans;
};