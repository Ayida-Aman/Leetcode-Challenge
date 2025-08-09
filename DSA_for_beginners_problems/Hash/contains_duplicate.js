var containsDuplicate = function (nums) {
  const hashMap = {};
  for (let num of nums) {
    if (hashMap.hasOwnProperty(num)) return true;
    else hashMap[num] = true;
  }
  return false;
};
