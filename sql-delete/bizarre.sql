delete from "cities"
  WHERE "name" = 'Pyongyang'
RETURNING *;
