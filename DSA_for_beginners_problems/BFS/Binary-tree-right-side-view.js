var rightSideView = function (root) {
  const queue = [];
  const result = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    let length = queue.length;
    let rightVal = null;
    for (let i = 0; i < length; i++) {
      let curr = queue.shift();
      rightVal = curr.val;
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.push(rightVal);
  }
  return result;
};
