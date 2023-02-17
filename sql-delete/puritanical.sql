delete FROM "films"
  where rating != 'G'
RETURNING *;
