const fs = require('fs');
const path = require('path');

// Завдання 10: об'єкт { назва файлу: розмір }
module.exports = function (folderName) {
  const folderPath = path.join(__dirname, folderName);
  const items = fs.readdirSync(folderPath);
  const result = {};
  for (let i = 0; i < items.length; i++) {
    const itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile()) {
      result[items[i]] = fs.statSync(itemPath).size;
    }
  }
  return result;
};

if (require.main === module) {
  console.log(module.exports('test_folder'));
}
