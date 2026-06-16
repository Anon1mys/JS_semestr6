const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 1: зчитати вміст файлу
module.exports = function (filePath) {
  const fullPath = path.join(__dirname, filePath);
  return fs.readFileSync(fullPath, 'utf8');
};

if (require.main === module) {
  console.log(module.exports('test.txt'));
}
