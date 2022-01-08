-- TO DO --
-- Enlever les id_bollocks et les remplacer par id TOUT COURT -- OK
-- Remettre les noms de mes tables en snake case-- OK


-- CREATE DATABASE SKEDULAP_V4;
-- \c SKEDULAP_V4;

-- accéder à ma DB
-- ACCESS DATABASE SKEDULAP: psql -U skedulap -d skedulap

-- Recréer ma BDD --
-- psql -U skedulap -d skedulap -f /home/alexandre/Desktop/skedulap/skedulap-back-v1/data/create_skedulap.sql
 --

-- LISTS TABLES SKEDULAP: \d ou \dt
-- SHOW TABLE:  \d "USER"
-- SELECT * FROM "USER";


BEGIN;

-- DELETE TABLES --

DROP TABLE IF EXISTS 
"INTERVENTION_CARAVAN",
"INTERVENTION",
"TOWN",
"CARAVAN",
"SUPPORT",
"PERMANENCE_TOWN",
"APPOINTMENT",
"PERMANENCE",
"USER",
"USER_APPOINTMENT",
"TIME_RANGE",
"STRUCTURE",
"intervention_caravan",
"intervention",
"town",
"caravan",
"support",
"permanence_town",
"appointment",
"permanence",
"user",
"user_appointment",
"time_range",
"structure";

-- CREATE TABLES --

CREATE TABLE IF NOT EXISTS "intervention_caravan" (
  "id_intervention" SERIAL,
  "id_caravan" SERIAL
  -- PRIMARY KEY (id_intervention, id_caravan)
);

CREATE TABLE IF NOT EXISTS "intervention" (
  "id" SERIAL PRIMARY KEY,
  "arriving_date" date NOT NULL,
  "leaving_date" date NOT NULL,
  "id_town" SERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- PRIMARY KEY (id_intervention)
);

CREATE TABLE IF NOT EXISTS "town" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(42) NOT NULL,
  "postcode" VARCHAR(10) NOT NULL,
  -- PRIMARY KEY (id_town),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "caravan" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(42) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_caravan)
);

CREATE TABLE IF NOT EXISTS "support" (
  "id" SERIAL PRIMARY KEY,
  "type_support" VARCHAR(42) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_support)
);

CREATE TABLE IF NOT EXISTS "permanence_town" (
  "id_permanence" SERIAL,
  "id_town" SERIAL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_permanence, id_town)
);

CREATE TABLE IF NOT EXISTS "appointment" (
  "id" SERIAL PRIMARY KEY,
  "appointment_day" DATE NOT NULL,
  "beginning_appointment" TIME NOT NULL,
  "end_appointment" TIME NOT NULL,
  "grouped" BOOLEAN NOT NULL,
  "capacity" INTEGER NOT NULL,
  "id_support" SERIAL,
  "id_permanence" SERIAL,
  "id_caravan" SERIAL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_appointment)
);

CREATE TABLE IF NOT EXISTS "permanence" (
  "id" SERIAL PRIMARY KEY,
  "permanence_name" VARCHAR(42) NOT NULL,
  "id_structure" SERIAL,
  "id_time_range" SERIAL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_permanence)
);

CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR(42) NOT NULL,
  "password" VARCHAR(42) NOT NULL,
  -- "key_password" TEXT,
  "first_name" VARCHAR(42) NOT NULL,
  "last_name" VARCHAR(42) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (email)

-- CREATE TABLE IF NOT EXISTS "user" (
--   --"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   "id" serial PRIMARY KEY,
--   "user_name" VARCHAR(128) NOT NULL,
--   "email" VARCHAR(255) NOT NULL,
--   "password" TEXT NOT NULL,
--   "key_password" TEXT,
--   "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
--   "updated_at" TIMESTAMPTZ
-- );
);

CREATE TABLE IF NOT EXISTS "user_appointment" (
  "id_appointment" SERIAL,
  "id_user" SERIAL 
  -- PRIMARY KEY,
  -- PRIMARY KEY (id_appointment, email)
);

CREATE TABLE IF NOT EXISTS "time_range" (
  "id" SERIAL PRIMARY KEY,
  "opening_time" TIME NOT NULL,
  "closing_time" TIME NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_time_range)
);

CREATE TABLE IF NOT EXISTS "structure" (
  "id" SERIAL PRIMARY KEY,
  "type_structure" VARCHAR(42),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_structure)
);

-- MODIFY TABLES WITH FOREIGN KEYS

ALTER TABLE "intervention_caravan" ADD FOREIGN KEY ("id_caravan") REFERENCES "caravan" ("id");
ALTER TABLE "intervention_caravan" ADD FOREIGN KEY ("id_intervention") REFERENCES "intervention" ("id");
ALTER TABLE "intervention" ADD FOREIGN KEY ("id_town") REFERENCES "town" ("id");
ALTER TABLE "permanence_town" ADD FOREIGN KEY ("id_town") REFERENCES "town" ("id");
ALTER TABLE "permanence_town" ADD FOREIGN KEY ("id_permanence") REFERENCES "permanence" ("id");
ALTER TABLE "appointment" ADD FOREIGN KEY ("id_caravan") REFERENCES "caravan" ("id");
ALTER TABLE "appointment" ADD FOREIGN KEY ("id_permanence") REFERENCES "permanence" ("id");
ALTER TABLE "appointment" ADD FOREIGN KEY ("id_support") REFERENCES "support" ("id");
ALTER TABLE "permanence" ADD FOREIGN KEY ("id_structure") REFERENCES "structure" ("id");
ALTER TABLE "user_appointment" ADD FOREIGN KEY ("id_user") REFERENCES "user" ("id");
ALTER TABLE "user_appointment" ADD FOREIGN KEY ("id_appointment") REFERENCES "appointment" ("id");

COMMIT;
