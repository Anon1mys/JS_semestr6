const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 3: слова з першого рядка
module.exports = function (filePath) {
  const fullPath = path.join(__dirname, filePath);
  const text = fs.readFileSync(fullPath, 'utf8');
  const firstLine = text.split('\n')[0];
  return firstLine.split(' ');
};

if (require.main === module) {
  console.log(module.exports('words.txt'));
}
