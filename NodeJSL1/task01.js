// Завдання 1: anonimний модуль, що експортує рядок "NodeJS"
module.exports = function () {
  return 'NodeJS';
};

if (require.main === module) {
  console.log(module.exports());
}
