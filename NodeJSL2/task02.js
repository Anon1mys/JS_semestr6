const path = require('path');

// Завдання 2: абсолютний шлях до папки (відносно index.js)
module.exports = function (folderName) {
  return path.resolve(__dirname, folderName);
};

if (require.main === module) {
  console.log(module.exports('test_folder'));
}
