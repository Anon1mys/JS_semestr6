const fs = require('fs');
const path = require('path');

// Завдання 9: масив назв файлів у папці
module.exports = function (folderName) {
  const folderPath = path.join(__dirname, folderName);
  const items = fs.readdirSync(folderPath);
  const files = [];
  for (let i = 0; i < items.length; i++) {
    const itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile()) {
      files.push(items[i]);
    }
  }
  return files;
};

if (require.main === module) {
  console.log(module.exports('test_folder'));
}
