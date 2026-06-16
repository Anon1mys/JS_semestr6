// Завдання 11: розмір файлу (B, kB, MB)
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
  console.log(module.exports(0));
  console.log(module.exports(500));
  console.log(module.exports(5000));
  console.log(module.exports(2000000));
}
