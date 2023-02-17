SELECT "p"."amount",
      "c"."firstName",
      "c"."lastName"
  FROM "payments" AS "p"
  JOIN "customers" as "c" USING ("customerId")
order by "amount" DESC
LIMIT 10;
