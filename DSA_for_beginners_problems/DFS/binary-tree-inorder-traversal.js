var inorderTraversal = function (root) {
  const result = [];
  function traverse(node) {
    if (!node) {
      return null;
    }
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
};
