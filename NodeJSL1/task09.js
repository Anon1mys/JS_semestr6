// Завдання 9: перевірка розширення зображення
module.exports = function (str) {
  const lower = str.toLowerCase();
  if (lower === 'gif' || lower === 'png' || lower === 'jpeg') {
    return 'image';
  }
  return false;
};

if (require.main === module) {
  console.log(module.exports('png'));
  console.log(module.exports('txt'));
}
