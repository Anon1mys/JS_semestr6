// Завдання 2: повертає більше з двох цілих; якщо рівні — перше
module.exports = function (a, b) {
  if (a >= b) {
    return a;
  }
  return b;
};

if (require.main === module) {
  console.log(module.exports(5, 3));
  console.log(module.exports(4, 4));
}
