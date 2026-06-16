const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 8: масив рядків у d_04/t_08.txt
module.exports = function (arr) {
  const text = arr.join('\r\n');
  const filePath = path.join(__dirname, 'd_04', 't_08.txt');
  fs.writeFileSync(filePath, text, { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports(['line1', 'line2', 'line3']);
  console.log('Записано d_04/t_08.txt');
}
