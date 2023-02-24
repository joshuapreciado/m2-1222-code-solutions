SELECT "countries"."name" as "country",
        COUNT("cities"."cityId") AS "totalCities"
  FROM "cities"
  JOIN "countries" USING ("countryId")
GROUP BY "countries"."countryId";
