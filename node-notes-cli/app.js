const fs = require('fs');
const data = require('./data.json');

if (process.argv[2] === 'read') {
  for (const id in data.notes) {
    console.log(`${id}: ${data.notes[id]}`);
  }
}

if (process.argv[2] === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'delete') {
  delete data.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'update') {
  for (const id in data.notes) {
    if (data.notes[id] === data.notes[process.argv[3]]) {
      data.notes[process.argv[3]] = process.argv[4];
    }
  }
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}
