// Завдання 12: розмір файлу (аналогічно до task11)
module.exports = function (num) {
  if (num === 0) {
    return 0;
  }
  if (num > 0 && num <= 999) {
    return 'B';
  }
  if (num >= 1000 && num <= 999999) {
    return 'kB';
  }
  return 'MB';
};

if (require.main === module) {
  console.log(module.exports(1500));
}
