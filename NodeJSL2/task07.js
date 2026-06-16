const path = require('path');

// Завдання 7: розширення файлу (з крапкою)
module.exports = function (fileName) {
  const filePath = path.join(__dirname, fileName);
  return path.extname(filePath);
};

if (require.main === module) {
  console.log(module.exports('test.txt'));
  console.log(module.exports('test_folder/file1.txt'));
}
