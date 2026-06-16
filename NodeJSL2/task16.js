const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 6: запис тексту в d_04/t_06.txt
module.exports = function (text) {
  const filePath = path.join(__dirname, 'd_04', 't_06.txt');
  fs.writeFileSync(filePath, text, { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports('Test text 06');
  console.log('Записано d_04/t_06.txt');
}
