/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */
var kClosest = function (points, k) {
  const minPQ = new MinPriorityQueue((point) => point[0]);
  for (const [x, y] of points) {
    const dist = x ** 2 + y ** 2;
    minPQ.enqueue([dist, x, y]);
  }
  const result = [];
  for (let i = 0; i < k; i++) {
    const [_, x, y] = minPQ.dequeue();
    result.push([x, y]);
  }
  return result;
};
