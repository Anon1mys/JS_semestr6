const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 4: чи містить код число 7
module.exports = function (filePath) {
  const fullPath = path.join(__dirname, filePath);
  const code = fs.readFileSync(fullPath, 'utf8');
  return code.includes('7');
};

if (require.main === module) {
  console.log(module.exports('code7.txt'));
  console.log(module.exports('code_no7.txt'));
}
