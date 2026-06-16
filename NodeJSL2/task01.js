const path = require('path');

// Завдання 1: абсолютний шлях до каталогу, з якого викликано
module.exports = function () {
  return path.dirname(require.main.filename);
};

if (require.main === module) {
  console.log(module.exports());
}
