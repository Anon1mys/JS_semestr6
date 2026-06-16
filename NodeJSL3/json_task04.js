const readJson = require('./json_task01');

// JSON 4: сума значень ключа AMOUNT
module.exports = function (filePath) {
  const data = readJson(filePath);
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i].AMOUNT;
  }

  return sum;
};

if (require.main === module) {
  console.log(module.exports('f_05/payments.json'));
}
