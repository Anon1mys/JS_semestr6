// Завдання 14: порівняння двох об'єктів
module.exports = function (obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!keys2.includes(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

if (require.main === module) {
  console.log(module.exports({ a: 1, b: 'x' }, { a: 1, b: 'x' }));
  console.log(module.exports({ a: 1 }, { a: 2 }));
}
