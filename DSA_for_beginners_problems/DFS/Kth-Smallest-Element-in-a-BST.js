var kthSmallest = function (root, k) {
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
  return result[k - 1];
};
