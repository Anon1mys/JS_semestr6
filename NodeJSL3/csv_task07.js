const getCSV = require('./getCSV');

async function t07() {
  const filePath = 'f_06/v_07.csv';
  const options = { columns: true, delimiter: ';' };
  const records = await getCSV(filePath, options);
  console.log(records);

  let sum = 0;
  for (let i = 0; i < records.length; i++) {
    const row = records[i];
    const keys = Object.keys(row);
    for (let j = 0; j < keys.length; j++) {
      const value = row[keys[j]];
      if (value !== '' && !isNaN(value)) {
        sum += Number(value);
      }
    }
  }

  return sum;
}

// t07();

module.exports = t07;
