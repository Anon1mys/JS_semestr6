// Завдання 3: максимальне значення з масиву
module.exports = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

if (require.main === module) {
  console.log(module.exports([1, 9, 3, 7]));
}
