const express = require('express');
const app = express();
const data = require('./data.json');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
// GET A LIST OF NOTES
app.get('/api/notes/:id', (req, res) => {
  const empty = [];
  for (const id in data.notes) {
    empty.push(data.notes[id]);
  }
  res.json(empty);
});

// GET SINGLE NOTE
app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (parseInt(id) <= 0 || isNaN(id)) {
    res.status(400);
    res.json({ error: 'ID must be a positive int' });
  } else if (data.notes[id]) {
    res.json(data.notes[id]);
  } else {
    res.status(404);
    res.json({ error: 'Unable to find the id' });
  }
});
