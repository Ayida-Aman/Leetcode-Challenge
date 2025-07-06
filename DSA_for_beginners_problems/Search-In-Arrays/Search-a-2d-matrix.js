var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (target > matrix[i][mid]) {
        left = mid + 1;
      } else if (target < matrix[i][mid]) {
        right = mid - 1;
      } else {
        return true;
      }
    }
  }
  return false;
};
