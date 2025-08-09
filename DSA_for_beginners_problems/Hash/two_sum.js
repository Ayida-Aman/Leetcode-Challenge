var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap.hasOwnProperty(diff)) {
      return [hashMap[diff], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
  return;
};
