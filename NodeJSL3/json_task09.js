const fs = require('fs');
const path = require('path');

// JSON 9: запис об'єкта у f_05/09.json
module.exports = function (obj) {
  const dest = path.join(__dirname, 'f_05', '09.json');
  fs.writeFileSync(dest, JSON.stringify(obj, null, 4), { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports({ city: 'Kyiv', country: 'Ukraine' });
  console.log(require('./json_task01')('f_05/09.json'));
}
