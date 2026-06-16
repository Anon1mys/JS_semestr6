const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 7: запис рядка з пробілом між символами
module.exports = function (str) {
  const result = str.split('').join(' ');
  const filePath = path.join(__dirname, 'd_04', 't_07.dat');
  fs.writeFileSync(filePath, result, { encoding: 'utf8', flag: 'w' });
  return result;
};

if (require.main === module) {
  console.log(module.exports('abba'));
}
