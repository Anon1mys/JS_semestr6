// Завдання 10: модуль password
exports.password = function (str) {
  str = str.trim();
  if (str.length <= 8) {
    return false;
  }
  const chars = str.split('');
  const used = [];
  for (let i = 0; i < chars.length; i++) {
    if (used.includes(chars[i])) {
      return false;
    }
    used.push(chars[i]);
  }
  return true;
};

if (require.main === module) {
  const { password } = require('./task10');
  console.log(password('  abcdefghi  '));
  console.log(password('abcdefghi'));
}
