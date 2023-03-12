-- -------------------------------------------------------------
-- TablePlus 5.3.2(490)
--
-- https://tableplus.com/
--
-- Database: test
-- Generation Time: 2023-03-12 21:32:32.0580
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."awards";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS awards_id_seq;

-- Table Definition
CREATE TABLE "public"."awards" (
    "id" int4 NOT NULL DEFAULT nextval('awards_id_seq'::regclass),
    "type_id" int4 NOT NULL,
    "name" varchar(255) NOT NULL,
    "point" int4 NOT NULL,
    "image_url" text NOT NULL,
    "status" int4 NOT NULL,
    "created_at" timestamptz NOT NULL,
    "updated_at" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."SequelizeMeta";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."SequelizeMeta" (
    "name" varchar(255) NOT NULL,
    PRIMARY KEY ("name")
);

DROP TABLE IF EXISTS "public"."types";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS types_id_seq;

-- Table Definition
CREATE TABLE "public"."types" (
    "id" int4 NOT NULL DEFAULT nextval('types_id_seq'::regclass),
    "code" int4 NOT NULL,
    "name" varchar(55) NOT NULL,
    "status" int4 NOT NULL,
    "created_at" timestamptz NOT NULL,
    "updated_at" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."users";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "email" varchar(255) NOT NULL,
    "full_name" varchar(255) NOT NULL,
    "status" int4 NOT NULL,
    "created_at" timestamptz NOT NULL,
    "updated_at" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."awards" ("id", "type_id", "name", "point", "image_url", "status", "created_at", "updated_at") VALUES
(1, 1, 'Vouchers Bersama', 10000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07'),
(2, 1, 'Vouchers Sendiri', 50000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07'),
(3, 3, 'Giftcard Membership', 1000000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07'),
(4, 3, 'Giftcard 1 year', 10000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07'),
(5, 2, 'Buy 1 Get 1', 70000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07'),
(6, 2, 'Buy 2 Get 1', 20000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07'),
(7, 3, 'Giftcard For Payday', 200000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU', 1, '2023-03-11 12:06:31.436+07', '2023-03-11 12:06:31.436+07');

INSERT INTO "public"."SequelizeMeta" ("name") VALUES
('20230310145332-create-user.js'),
('20230311024308-create-types.js'),
('20230311024332-create-awards.js');

INSERT INTO "public"."types" ("id", "code", "name", "status", "created_at", "updated_at") VALUES
(1, 1, 'Vouchers', 1, '2023-03-11 12:06:31.433+07', '2023-03-11 12:06:31.433+07'),
(2, 2, 'Products', 1, '2023-03-11 12:06:31.433+07', '2023-03-11 12:06:31.433+07'),
(3, 3, 'Giftcard', 1, '2023-03-11 12:06:31.433+07', '2023-03-11 12:06:31.433+07');

INSERT INTO "public"."users" ("id", "email", "full_name", "status", "created_at", "updated_at") VALUES
(1, 'dummy1@mail.com', 'Setiawan', 1, '2023-03-11 12:06:31.428+07', '2023-03-11 12:06:31.428+07'),
(2, 'dummy2@mail.com', 'Setiaji', 1, '2023-03-11 12:06:31.428+07', '2023-03-11 12:06:31.428+07');

ALTER TABLE "public"."awards" ADD FOREIGN KEY ("type_id") REFERENCES "public"."types"("id");
