const getCSV = require('./getCSV');

async function t10() {
  const filePath = 'f_06/v_10.csv';
  const options = { columns: true, delimiter: ';' };
  const records = await getCSV(filePath, options);
  console.log(records);
  return records;
}

// t10();

module.exports = t10;
