var minEatingSpeed = function (piles, h) {
  if (piles.length == h) {
    return Math.max(...piles);
  }
  left = 1;
  right = Math.max(...piles);
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
