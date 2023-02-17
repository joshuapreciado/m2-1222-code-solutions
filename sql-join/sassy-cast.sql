SELECT "a"."firstName",
      "a"."lastName"
  FROM "actors" as "a"
  JOIN "castMembers" as "c" USING ("actorId")
  JOIN "films" AS "f" USING ("filmId")
WHERE "f"."title" = 'Jersey Sassy';
