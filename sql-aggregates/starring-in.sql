SELECT "genres"."name" AS "genre",
        COUNT("films"."filmId") AS "totalFilms"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films" USING ("filmId")
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
WHERE "actors"."firstName" = 'Lisa' AND
      "actors"."lastName" = 'Monroe'
GROUP BY "genres"."name";
