function reverseList(head) {
  if (!head) {
    return null;
  }
  newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;
  return newHead;
}
