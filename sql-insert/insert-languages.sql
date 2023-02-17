insert into "languages" ("name")
values ('HTML'),
       ('CSS'),
       ('JavaScript')
  RETURNING *;
