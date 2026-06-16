const fs = require('fs');
const path = require('path');

// Завдання 3: чи існує папка
module.exports = function (folderName) {
  const folderPath = path.join(__dirname, folderName);
  return fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory();
};

if (require.main === module) {
  console.log(module.exports('test_folder'));
  console.log(module.exports('no_folder'));
}
