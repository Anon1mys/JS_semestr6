const readJson = require('./json_task01');

// JSON 3: масив прізвищ (name) працівників
module.exports = function (filePath) {
  const obj = readJson(filePath);
  const names = [];

  for (let i = 0; i < obj.employees.length; i++) {
    names.push(obj.employees[i].name);
  }

  return names;
};

if (require.main === module) {
  console.log(module.exports('f_05/workers.json'));
}
