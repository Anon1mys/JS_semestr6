// Завдання 8: залишає тільки числа (конвертує рядки-числа)
module.exports = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else if (typeof arr[i] === 'string' && arr[i].trim() !== '' && !isNaN(arr[i])) {
      result.push(Number(arr[i]));
    }
  }
  return result;
};

if (require.main === module) {
  console.log(module.exports([3, '33', '56b']));
}
