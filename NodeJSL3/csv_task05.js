const getCSV = require('./getCSV');

async function t05() {
  const filePath = 'f_06/v_05.csv';
  const options = { columns: false, delimiter: '=' };
  const records = await getCSV(filePath, options);
  console.log(records);
  return records[0];
}

// t05();

module.exports = t05;
