// Завдання 13: порівняння двох масивів
module.exports = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

if (require.main === module) {
  console.log(module.exports([1, 2, 3], [1, 2, 3]));
  console.log(module.exports([1, 2], [1, '2']));
}
