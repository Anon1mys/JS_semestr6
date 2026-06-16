const fs = require('fs');
const path = require('path');

// Завдання 4: 1 якщо файл існує, 0 якщо ні
module.exports = function (fileName) {
  const filePath = path.join(__dirname, fileName);
  return fs.existsSync(filePath) ? 1 : 0;
};

if (require.main === module) {
  console.log(module.exports('test.txt'));
  console.log(module.exports('missing.txt'));
}
