const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 10: копіювання вмісту файлу
module.exports = function (sourceFile, destFile) {
  const sourcePath = path.join(__dirname, sourceFile);
  const destPath = path.join(__dirname, destFile);
  const text = fs.readFileSync(sourcePath, 'utf8');
  fs.writeFileSync(destPath, text, { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports('source.txt', 'd_04/copy.txt');
  console.log('Скопійовано source.txt -> d_04/copy.txt');
}
