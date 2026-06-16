const fs = require('fs');
const path = require('path');
const readJson = require('./json_task01');

// JSON 8: 01.json -> 08.json без ключа os
module.exports = function () {
  const data = readJson('f_05/01.json');
  const result = {};

  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== 'os') {
      result[keys[i]] = data[keys[i]];
    }
  }

  const dest = path.join(__dirname, 'f_05', '08.json');
  fs.writeFileSync(dest, JSON.stringify(result, null, 4), { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports();
  console.log(require('./json_task01')('f_05/08.json'));
}
