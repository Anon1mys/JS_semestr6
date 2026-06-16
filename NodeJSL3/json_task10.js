const fs = require('fs');
const path = require('path');

// JSON 10: числа з масиву -> f_05/10.json
module.exports = function (arr) {
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    }
  }

  const dest = path.join(__dirname, 'f_05', '10.json');
  fs.writeFileSync(dest, JSON.stringify(numbers, null, 4), { encoding: 'utf8', flag: 'w' });
};

if (require.main === module) {
  module.exports([1, 'text', 5, 8, true, 3]);
  console.log(require('./json_task01')('f_05/10.json'));
}
