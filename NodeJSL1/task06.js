// Завдання 6: модуль preparedArray
exports.preparedArray = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(String(arr[i]).trim().toLowerCase());
  }
  return result;
};

if (require.main === module) {
  const { preparedArray } = require('./task06');
  console.log(preparedArray(['  ABC ', ' Xyz ']));
}
