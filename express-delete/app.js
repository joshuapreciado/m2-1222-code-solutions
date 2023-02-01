const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const empty = [];
  for (const key in grades) {
    empty.push(grades[key]);
  }
  res.json(empty);
});

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  // eslint-disable-next-line no-console
  console.log(grades);
  res.sendStatus(204);
});
