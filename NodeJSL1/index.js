const task01 = require('./task01');
const task02 = require('./task02');
const task03 = require('./task03');
const task04 = require('./task04');
const task05 = require('./task05');
const { preparedArray } = require('./task06');
const { isWhitespace } = require('./task07');
const task08 = require('./task08');
const task09 = require('./task09');
const { password } = require('./task10');
const task11 = require('./task11');
const fileSize = require('./file_size');
const eqObject = require('./equal_object');
const eqArray = require('./equal_array');

console.log('=== Task 01 ===');
console.log(task01());

console.log('\n=== Task 02 ===');
console.log(task02(10, 7));
console.log(task02(3, 3));

console.log('\n=== Task 03 ===');
console.log(task03([2, 8, 5]));

console.log('\n=== Task 04 ===');
console.log(task04('  TeST  '));

console.log('\n=== Task 05 ===');
console.log(task05('Hello'));

console.log('\n=== Task 06 ===');
console.log(preparedArray(['  AbC ', 'DeF  ']));

console.log('\n=== Task 07 ===');
console.log(isWhitespace('ab'));
console.log(isWhitespace('a b'));

console.log('\n=== Task 08 ===');
console.log(task08([3, '33', '56b']));

console.log('\n=== Task 09 ===');
console.log(task09('jpeg'));
console.log(task09('doc'));

console.log('\n=== Task 10 ===');
console.log(password('  abcdefghI  '));
console.log(password('abcabcabc'));

console.log('\n=== Task 11 ===');
console.log(task11(0));
console.log(task11(100));
console.log(task11(15000));
console.log(task11(3000000));

console.log('\n=== Task 12 (file_size) ===');
console.log(fileSize(750));
console.log(fileSize(2500000));

console.log('\n=== Task 13 (equal arrays in task13) ===');
const task13 = require('./task13');
console.log(task13([1, true, 'x'], [1, true, 'x']));

console.log('\n=== Task 14 (eqObject) ===');
console.log(eqObject({ x: 1, y: 'ok' }, { x: 1, y: 'ok' }));

console.log('\n=== Task 15 (eqArray) ===');
console.log(eqArray([1, 2], [1, 2]));
console.log(eqArray([1, 2], [2, 1]));

module.exports = {
  fileSize: fileSize,
  eqObject: eqObject,
  eqArray: eqArray
};
