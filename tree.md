# 二叉树

- BFS, DFS

- BFS: pre-order, in-order, post-order



## BFS的前序中序后序

- 递归: 

```javascript
Tree.prototype.preOrderTraverse = function(callback) {
    preOrder(root, callback);
  }

  var preOrder = function(node, callback) {
    if (node !== null) {
      callback(node.element);
      preOrder(node.left, callback);
      preOrder(node.right, callback);
    }
  }
```

- stack
  - 借助双层while循环





#### **二叉树深度的问题**

- 可以转为二叉树的层序遍历