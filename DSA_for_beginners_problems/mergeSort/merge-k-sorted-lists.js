var mergeKLists = function (lists) {
  if (lists.length == 0) return null;
  if (lists.length == 1) return lists[0];
  let mid = Math.floor(lists.length / 2);
  let left = mergeKLists(lists.slice(0, mid));
  let right = mergeKLists(lists.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  let dummy = { val: 0 };
  let node = dummy;
  while (left != null && right != null) {
    if (left.val < right.val) {
      node.next = left;
      node = node.next;
      left = left.next;
    } else {
      node.next = right;
      node = node.next;
      right = right.next;
    }
  }
  node.next = left || right;
  return dummy.next;
}
