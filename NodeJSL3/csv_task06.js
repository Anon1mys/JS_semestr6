const getCSV = require('./getCSV');

async function t06() {
  const filePath = 'f_06/v_06.csv';
  const options = { columns: true, delimiter: ',', skip_empty_lines: true };
  const records = await getCSV(filePath, options);
  console.log(records);
  return records;
}

// t06();

module.exports = t06;
