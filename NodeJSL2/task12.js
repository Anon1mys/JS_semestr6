const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 2: сума чисел з файлу
module.exports = function (filePath) {
  const fullPath = path.join(__dirname, filePath);
  const text = fs.readFileSync(fullPath, 'utf8');
  const parts = text.split(/\s+/);
  let sum = 0;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] !== '' && !isNaN(parts[i])) {
      sum += Number(parts[i]);
    }
  }
  return sum;
};

if (require.main === module) {
  console.log(module.exports('numbers.txt'));
}
