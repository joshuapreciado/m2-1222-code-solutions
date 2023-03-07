const pg = require('pg');
const express = require('express');
const app = express();
const expressJSON = express.json();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// App Listens
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

// App Gets
app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"`;
  db.query(sql)
    .then(result => {
      const row = result.row;
      res.status(200).json(row);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Unexpected Error'
      });
    });
});

app.use(expressJSON);

// App Post
app.post('/api/grades', (req, res) => {
  if (req.body.name === undefined) {
    res.status(400).json({
      error: 'Cannot find name'
    });
  }
  if (req.body.course === undefined) {
    res.status(400).json({
      error: 'Cannot find course'
    });
  }
  if (req.body.score === undefined) {
    res.status(400).json({
      error: 'Cannot find name, course, '
    });
  } else if (req.body.score < 0 || req.body.score > 100 || !Number.isInteger(req.body.score)) {
    res.status(400).json({
      error: 'Invalid grade, name, course, score. Score must be 0 between 100'
    });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
    returning *`;
    const params = [req.body.name, req.body.course, req.body.score];
    db.query(sql, params)
      .then(result => {
        const grades = result.row[0];
        res.status(201).json(grades);
      }).catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Error querying the database'
        });
      });
  }
});

// App Put
app.put('/api/grades/:gradeId', (req, res) => {
  const gradesIds = Number(req.params.gradesIds);
  if (gradesIds < 1) {
    res.status(400).json({
      error: 'gradesId Must be a positive integer'
    });
  }
  if (!Number.isInteger(gradesIds)) {
    res.status(400).json({
      error: 'gradesId Must be a positive integer'
    });
  } else if (req.body.name === undefined) {
    res.status(400).json({
      error: 'Missing name'
    });
  } else if (req.body.course === undefined) {
    res.status(400).json({
      error: 'Missing course'
    });
  } else if (req.body.score === undefined) {
    res.status(400).json({
      error: 'Missing score'
    });
  } else if (req.body.score < 0) {
    res.status(400).json({
      error: 'Number needs to be 0 to 100'
    });
  } else if (req.body.score > 100) {
    res.status(400).json({
      error: 'Number needs to be 0 to 100'
    });
  } else if (!Number.isInteger(req.body.score)) {
    res.status(400).json({
      error: 'Number needs to be 0 to 100'
    });
  } else {
    const sql = `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
    where "gradeId" = $1
    returning *`;
    const params = [gradesIds, req.body.name, req.body.course, req.body.score];
    db.query(sql, params).then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Cannot find target with gradeId'
        });
      } else {
        res.status(200).json(grade);
      }
    })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'error querying the database'
        });
      });
  }
});

// App Delete
app.delete('api/grades/:gradeId', (req, res) => {
  const gradeIds = Number(req.params.gradeId);
  if (gradeIds < 1) {
    res.status(400).json({
      error: 'Must be a positive int'
    });
  }
  if (!Number.isInteger(gradeIds)) {
    res.status(400).json({
      error: 'Must be a positive int'
    });
  } else {
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning`;
    const params = [gradeIds];
    db.query(sql, params).then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Cannot find target with gradeId'
        });
      } else {
        res.sendStatus(204);
      }
    })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Error occured'
        });
      });
  }
});
