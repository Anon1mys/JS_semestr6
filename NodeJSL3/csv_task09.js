const getCSV = require('./getCSV');

async function t09() {
  const filePath = 'f_06/v_09.csv';
  const options = { columns: true, delimiter: ';' };
  const records = await getCSV(filePath, options);
  console.log(records);

  const result = [];
  for (let i = 0; i < records.length; i++) {
    const row = {};
    const keys = Object.keys(records[i]);
    for (let j = 0; j < keys.length; j++) {
      row[keys[j]] = records[i][keys[j]].trim();
    }
    result.push(row);
  }

  return result;
}

// t09();

module.exports = t09;
