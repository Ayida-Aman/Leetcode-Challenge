var levelOrder = function (root) {
  const queue = [];
  const result = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const level = [];
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      let curr = queue.shift();
      level.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.push(level);
  }
  return result;
};
