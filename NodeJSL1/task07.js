// Завдання 7: isWhitespace — true, якщо всередині рядка немає пробілу
exports.isWhitespace = function (str) {
  const trimmed = str.trim();
  for (let i = 1; i < trimmed.length - 1; i++) {
    if (trimmed[i] === ' ') {
      return false;
    }
  }
  return true;
};

if (require.main === module) {
  const { isWhitespace } = require('./task07');
  console.log(isWhitespace('ab'));
  console.log(isWhitespace('a b'));
}
