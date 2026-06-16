const fs = require('fs');
const path = require('path');

// Завдання 5: розмір файлу в байтах
module.exports = function (fileName) {
  const filePath = path.join(__dirname, fileName);
  return fs.statSync(filePath).size;
};

if (require.main === module) {
  console.log(module.exports('test.txt'));
}
