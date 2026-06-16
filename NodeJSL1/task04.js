// Завдання 4: trim + toLowerCase
module.exports = function (str) {
  return str.trim().toLowerCase();
};

if (require.main === module) {
  console.log(module.exports('  HeLLo  '));
}
