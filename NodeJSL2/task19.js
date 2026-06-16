const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 9: вкладені масиви у d_04/t_09.txt
module.exports = function (arr) {
  const lines = [];
  for (let i = 0; i < arr.length; i++) {
    lines.push(arr[i].join(' '));
  }
  const text = lines.join('\r\n');
  const filePath = path.join(__dirname, 'd_04', 't_09.txt');
  fs.writeFileSync(filePath, text, { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports([['a', 'b', 'c'], ['1', '2', '3']]);
  console.log('Записано d_04/t_09.txt');
}
