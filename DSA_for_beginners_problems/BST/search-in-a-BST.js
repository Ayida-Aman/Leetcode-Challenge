var searchBST = function (root, val) {
  if (root == null) {
    return null;
  } else if (root.val == val) {
    return root;
  } else if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
};
