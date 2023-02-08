const express = require('express');
const app = express();
const data = require('./data.json');
const MiddleWare = express.json();
app.use(MiddleWare);

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

// CAN POST A NOTE
const fs = require('fs');
app.post('/api/notes/', (req, res) => {
  if (req.body.content) {
    res.status(400);
    res.json({ error: 'Content not found' });
  }
  data.notes[data.nextId] = {};
  data.notes[data.nextId].id = data.nextId;
  data.notes[data.nextId].content = req.body.content;
  data.nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500);
      res.json({ error: 'Error' });
    } else {
      res.status(201);
      res.json(data.notes[data.nextId - 1], { error: 'Success' });
    }
  });
});

// CAN DELETE A NOTE
app.delete('/api/notes/:id', (res, req) => {
  const id = req.params.id;
  if (parseInt(id) <= 0 || isNaN(id)) {
    res.status(400).json({ error: 'ID is not positive integer' });
  }
  if (data.notes[id] === undefined) {
    res.status(404).json({ error: 'ID not found' });
  }
  delete data.notes[id];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(204);
      res.send();
    }
  });
});

// PUT NOTE
app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (parseInt(id) <= 0 || isNaN(id)) {
    res.status(400).json({ error: 'Not a positive integer' });
  }
  if (req.body.content) {
    res.status(400).json({ error: 'Does not have a content property in the request.body' });
  }
  if (data.notes[id] === undefined) {
    res.status(400).json({ error: 'Unable to locate id' });
  }
  data.notes[id].content = req.body.content;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ error: 'Error' });
    } else {
      res.status(200).json(data.notes[id]);
    }
  });
});
