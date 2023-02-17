SELECT "c"."firstName",
      "c"."lastName"
  FROM "rentals" as "r"
  JOIN "customers" as "c" USING ("customerId")
  JOIN "inventory" as "i" USING ("inventoryId")
  JOIN "films" as "f" USING ("filmId")
WHERE "f"."title" = 'Magic Mallrats'
