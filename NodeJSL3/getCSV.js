const fs = require('fs');
const path = require('path');

function parseLine(line, delimiter) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === delimiter && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }

  result.push(current);
  return result;
}

async function getCSV(filePath, options) {
  options = options || {};
  const fullPath = path.join(__dirname, filePath);
  const text = fs.readFileSync(fullPath, 'utf8');
  const delimiter = options.delimiter || ',';
  const lines = text.split(/\r?\n/);
  const result = [];
  let headers = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (options.skip_empty_lines && line.trim() === '') {
      continue;
    }

    const row = parseLine(line, delimiter);

    if (options.columns) {
      if (headers === null) {
        headers = row;
      } else {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = row[j] !== undefined ? row[j] : '';
        }
        result.push(obj);
      }
    } else {
      result.push(row);
    }
  }

  return result;
}

module.exports = getCSV;
