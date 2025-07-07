var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
