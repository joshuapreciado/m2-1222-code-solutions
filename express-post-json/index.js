const express = require('express');
const app = express();
var nextId = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const empty = [];
  for (const key in empty) {
    empty.push(grades[key]);
  }
  res.json(empty);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.status(201);
  res.json(grades[nextId]);
  nextId++;
});
