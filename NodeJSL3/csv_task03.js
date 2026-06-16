const getCSV = require('./getCSV');

async function t03() {
  const filePath = 'f_06/v_03.csv';
  const options = { columns: true, delimiter: ';' };
  const records = await getCSV(filePath, options);
  console.log(records);
  return records;
}

// t03();

module.exports = t03;
