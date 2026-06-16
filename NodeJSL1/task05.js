// Завдання 5: випадковий символ з рядка
module.exports = function (str) {
  const index = Math.floor(Math.random() * str.length);
  return str[index];
};

if (require.main === module) {
  console.log(module.exports('NodeJS'));
}
