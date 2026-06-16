const readJson = require('./json_task01');

// JSON 2: age > 18 (strict)
module.exports = function (filePath) {
  const obj = readJson(filePath);
  return obj.age > 18;
};

if (require.main === module) {
  console.log(module.exports('f_05/person.json'));
}
