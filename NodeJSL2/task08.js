const fs = require('fs');
const path = require('path');

// Завдання 8: кількість файлів у папці
module.exports = function (folderName) {
  const folderPath = path.join(__dirname, folderName);
  const items = fs.readdirSync(folderPath);
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    const itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile()) {
      count++;
    }
  }
  return count;
};

if (require.main === module) {
  console.log(module.exports('test_folder'));
}
