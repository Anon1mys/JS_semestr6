const getCSV = require('./getCSV');

async function t04() {
  const filePath = 'f_06/v_04.csv';
  const options = { columns: false, delimiter: ';' };
  const records = await getCSV(filePath, options);
  console.log(records);
  return records[1];
}

// t04();

module.exports = t04;
