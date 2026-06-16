const fs = require('fs');
const path = require('path');

// JSON 6: кількість JSON-файлів у f_05
module.exports = function () {
  const folderPath = path.join(__dirname, 'f_05');
  const items = fs.readdirSync(folderPath);
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    const itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile() && items[i].endsWith('.json')) {
      count++;
    }
  }

  return count;
};

if (require.main === module) {
  console.log(module.exports());
}
