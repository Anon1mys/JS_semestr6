const getCSV = require('./getCSV');

async function t08() {
  const filePath = 'f_06/v_08.csv';
  const options = { columns: true, delimiter: ',' };
  const records = await getCSV(filePath, options);
  console.log(records);

  const result = [];
  for (let i = 0; i < records.length; i++) {
    const email = records[i]['EMAIL ADDRESS'];
    if (email && email.trim() !== '') {
      result.push(records[i]);
    }
  }

  return result;
}

// t08();

module.exports = t08;
