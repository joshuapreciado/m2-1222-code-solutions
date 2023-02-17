SELECT "f"."releaseYear",
      "g"."name" as "genre"
  FROM "films" as "f"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" as "g" USING ("genreId")
WHERE "f"."title" = 'Boogie Amelie'
