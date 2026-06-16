const fs = require('fs');
const path = require('path');

// JSON 7: копія f_05/01.json -> f_05/07.json
module.exports = function () {
  const source = path.join(__dirname, 'f_05', '01.json');
  const dest = path.join(__dirname, 'f_05', '07.json');
  const text = fs.readFileSync(source, 'utf8');
  fs.writeFileSync(dest, text, { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports();
  console.log('Створено f_05/07.json');
}
