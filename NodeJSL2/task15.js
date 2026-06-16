const fs = require('fs');
const path = require('path');

// Zadania_2, завдання 5: замінити подвійні пробіли на одинарні
module.exports = function (filePath) {
  const fullPath = path.join(__dirname, filePath);
  const text = fs.readFileSync(fullPath, 'utf8');
  return text.replace(/  +/g, ' ');
};

if (require.main === module) {
  console.log(module.exports('spaces.txt'));
}
