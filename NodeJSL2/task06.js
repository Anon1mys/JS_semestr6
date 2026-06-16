const fs = require('fs');
const path = require('path');

// Завдання 6: розмір файлу або 0, якщо не існує
module.exports = function (fileName) {
  const filePath = path.join(__dirname, fileName);
  if (!fs.existsSync(filePath)) {
    return 0;
  }
  return fs.statSync(filePath).size;
};

if (require.main === module) {
  console.log(module.exports('test.txt'));
  console.log(module.exports('missing.txt'));
}
