var minNode = function (root) {
  while (root && root.left) {
    root = root.left;
  }
  return root;
};
var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left) return root.right;
    else if (!root.right) return root.left;
    else {
      minimumNode = minNode(root.right);
      root.val = minimumNode.val;
      root.right = deleteNode(root.right, minimumNode.val);
    }
  }
  return root;
};
