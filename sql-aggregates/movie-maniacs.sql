SELECT "c"."firstName",
        "c"."lastName",
        SUM("p"."amount") AS "totalSpent"
  FROM "payments" AS "p"
  JOIN "customers" AS "c" USING ("customerId")
  GROUP BY "c"."customerId"
  ORDER BY "totalSpent" DESC;
