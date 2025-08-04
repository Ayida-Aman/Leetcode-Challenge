/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */
var lastStoneWeight = function (stones) {
  const maxPQ = new MaxPriorityQueue();
  for (const stone of stones) {
    maxPQ.enqueue(stone);
  }
  while (maxPQ.size() > 1) {
    const stone1 = maxPQ.dequeue();
    const stone2 = maxPQ.dequeue();
    if (stone1 !== stone2) {
      maxPQ.enqueue(Math.abs(stone1 - stone2));
    }
  }
  return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
};
