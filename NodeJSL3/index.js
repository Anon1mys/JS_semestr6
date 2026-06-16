const fs = require('fs');
const path = require('path');

const readJson = require('./json_task01');
const jsonTask02 = require('./json_task02');
const jsonTask03 = require('./json_task03');
const jsonTask04 = require('./json_task04');
const jsonTask05 = require('./json_task05');
const jsonTask06 = require('./json_task06');
const jsonTask07 = require('./json_task07');
const jsonTask08 = require('./json_task08');
const jsonTask09 = require('./json_task09');
const jsonTask10 = require('./json_task10');

const t02 = require('./csv_task02');
const t03 = require('./csv_task03');
const t04 = require('./csv_task04');
const t05 = require('./csv_task05');
const t06 = require('./csv_task06');
const t07 = require('./csv_task07');
const t08 = require('./csv_task08');
const t09 = require('./csv_task09');
const t10 = require('./csv_task10');

async function run() {
  console.log('=== JSON ===\n');

  console.log('json_task01 - read f_05/01.json:');
  console.log(readJson('f_05/01.json'));

  console.log('\njson_task02 - age > 18:');
  console.log(jsonTask02('f_05/person.json'));

  console.log('\njson_task03 - employee names:');
  console.log(jsonTask03('f_05/workers.json'));

  console.log('\njson_task04 - sum AMOUNT:');
  console.log(jsonTask04('f_05/payments.json'));

  console.log('\njson_task05 - sum array elements:');
  console.log(jsonTask05('f_05/numbers.json'));

  console.log('\njson_task06 - JSON files count in f_05:');
  console.log(jsonTask06());

  console.log('\njson_task07 - copy 01.json to 07.json:');
  jsonTask07();
  console.log(readJson('f_05/07.json'));

  console.log('\njson_task08 - 08.json without os:');
  jsonTask08();
  console.log(readJson('f_05/08.json'));

  console.log('\njson_task09 - write 09.json:');
  jsonTask09({ city: 'Lviv', country: 'Ukraine' });
  console.log(readJson('f_05/09.json'));

  console.log('\njson_task10 - numbers to 10.json:');
  jsonTask10([1, 'abc', 4, 9, false, 2]);
  console.log(readJson('f_05/10.json'));

  console.log('\n=== CSV ===\n');

  console.log('csv_task02 - t02:');
  console.log(await t02());

  console.log('\ncsv_task03 - t03:');
  console.log(await t03());

  console.log('\ncsv_task04 - t04 (colors):');
  console.log(await t04());

  console.log('\ncsv_task05 - t05 (headers):');
  console.log(await t05());

  console.log('\ncsv_task06 - t06:');
  console.log(await t06());

  console.log('\ncsv_task07 - t07 (sum):');
  console.log(await t07());

  console.log('\ncsv_task08 - t08 (without empty email):');
  console.log(await t08());

  console.log('\ncsv_task09 - t09 (trim spaces):');
  console.log(await t09());

  console.log('\ncsv_task10 - t10:');
  console.log(await t10());
}

run();
