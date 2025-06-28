var countStudents = function (students, sandwiches) {
  let count0 = students.filter((s) => s == 0).length;
  let count1 = students.length - count0;

  for (let sandwich of sandwiches) {
    if (sandwich == 0 && count0 > 0) {
      count0--;
    } else if (sandwich == 1 && count1 > 0) {
      count1--;
    } else {
      break;
    }
  }
  return count0 + count1;
};
