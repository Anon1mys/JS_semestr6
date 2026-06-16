const getCSV = require('./getCSV');

async function t02() {
  const filePath = 'f_06/v_02.csv';
  const options = { columns: true, delimiter: ',' };
  const records = await getCSV(filePath, options);
  console.log(records);
  return records;
}

// t02();

module.exports = t02;
