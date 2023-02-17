SELECT "a"."line1" AS "address",
      "c"."name" as "city",
      "a"."district"
  FROM "addresses" as "a"
  JOIN "cities" AS "c" USING ("cityId")
