const fs = require('fs');
const path = require('path');

const task01 = require('./task01');
const task02 = require('./task02');
const task03 = require('./task03');
const task04 = require('./task04');
const task05 = require('./task05');
const task06 = require('./task06');
const task07 = require('./task07');
const task08 = require('./task08');
const task09 = require('./task09');
const task10 = require('./task10');
const task11 = require('./task11');
const task12 = require('./task12');
const task13 = require('./task13');
const task14 = require('./task14');
const task15 = require('./task15');
const task16 = require('./task16');
const task17 = require('./task17');
const task18 = require('./task18');
const task19 = require('./task19');
const task20 = require('./task20');

console.log('=== Zadania_1 ===\n');

console.log('Task 01 - absolute dir:');
console.log(task01());

console.log('\nTask 02 - folder path:');
console.log(task02('test_folder'));

console.log('\nTask 03 - folder exists:');
console.log(task03('test_folder'), task03('no_folder'));

console.log('\nTask 04 - file exists (1/0):');
console.log(task04('test.txt'), task04('missing.txt'));

console.log('\nTask 05 - file size:');
console.log(task05('test.txt'));

console.log('\nTask 06 - file size or 0:');
console.log(task06('test.txt'), task06('missing.txt'));

console.log('\nTask 07 - extension:');
console.log(task07('test.txt'));

console.log('\nTask 08 - files count:');
console.log(task08('test_folder'));

console.log('\nTask 09 - file names:');
console.log(task09('test_folder'));

console.log('\nTask 10 - file sizes object:');
console.log(task10('test_folder'));

console.log('\n=== Zadania_2 ===\n');

console.log('Task 11 - read file:');
console.log(task11('test.txt').trim());

console.log('\nTask 12 - sum of numbers:');
console.log(task12('numbers.txt'));

console.log('\nTask 13 - words from first line:');
console.log(task13('words.txt'));

console.log('\nTask 14 - contains 7:');
console.log(task14('code7.txt'), task14('code_no7.txt'));

console.log('\nTask 15 - replace double spaces:');
console.log('"' + task15('spaces.txt') + '"');

console.log('\nTask 16 - write t_06.txt:');
task16('Hello from task 16');
console.log(fs.readFileSync(path.join(__dirname, 'd_04', 't_06.txt'), 'utf8'));

console.log('\nTask 17 - write t_07.dat:');
console.log(task17('abba'));

console.log('\nTask 18 - write t_08.txt:');
task18(['first', 'second', 'third']);
console.log(fs.readFileSync(path.join(__dirname, 'd_04', 't_08.txt'), 'utf8'));

console.log('\nTask 19 - write t_09.txt:');
task19([['one', 'two'], ['three', 'four']]);
console.log(fs.readFileSync(path.join(__dirname, 'd_04', 't_09.txt'), 'utf8'));

console.log('\nTask 20 - copy file:');
task20('source.txt', 'd_04/dest.txt');
console.log(fs.readFileSync(path.join(__dirname, 'd_04', 'dest.txt'), 'utf8'));
