const fs = require('fs');
const path = require('path');

// JSON 1: читання файлу з валідацією
module.exports = function (filePath) {
  const fullPath = path.join(__dirname, filePath);
  const text = fs.readFileSync(fullPath, 'utf8');

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error('Invalid JSON file: ' + filePath);
  }
};

if (require.main === module) {
  console.log(module.exports('f_05/01.json'));
}
