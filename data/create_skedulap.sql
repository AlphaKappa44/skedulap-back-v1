-- CREATE DATABASE SKEDULAP_V4;
-- \c SKEDULAP_V4;
-- ACCESS DATABASE SKEDULAP: psql -U skedulap -d skedulap
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
"STRUCTURE";

-- CREATE TABLES --

CREATE TABLE IF NOT EXISTS "INTERVENTION_CARAVAN" (
  "id_intervention" SERIAL,
  "id_caravan" SERIAL
  -- PRIMARY KEY (id_intervention, id_caravan)
);

CREATE TABLE IF NOT EXISTS "INTERVENTION" (
  "id_intervention" SERIAL PRIMARY KEY,
  "arriving_date" date NOT NULL,
  "leaving_date" date NOT NULL,
  "id_town" SERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- PRIMARY KEY (id_intervention)
);

CREATE TABLE IF NOT EXISTS "TOWN" (
  "id_town" SERIAL PRIMARY KEY,
  "name" VARCHAR(42) NOT NULL,
  "postcode" VARCHAR(10) NOT NULL,
  -- PRIMARY KEY (id_town),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "CARAVAN" (
  "id_caravan" SERIAL PRIMARY KEY,
  "name" VARCHAR(42) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_caravan)
);

CREATE TABLE IF NOT EXISTS "SUPPORT" (
  "id_support" SERIAL PRIMARY KEY,
  "type_support" VARCHAR(42) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_support)
);

CREATE TABLE IF NOT EXISTS "PERMANENCE_TOWN" (
  "id_permanence" SERIAL,
  "id_town" SERIAL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_permanence, id_town)
);

CREATE TABLE IF NOT EXISTS "APPOINTMENT" (
  "id_appointment" SERIAL PRIMARY KEY,
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

CREATE TABLE IF NOT EXISTS "PERMANENCE" (
  "id_permanence" SERIAL PRIMARY KEY,
  "permanence_name" VARCHAR(42) NOT NULL,
  "id_structure" SERIAL,
  "id_time_range" SERIAL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_permanence)
);

CREATE TABLE IF NOT EXISTS "USER" (
  "id_user" SERIAL PRIMARY KEY,
  "email" VARCHAR(42) NOT NULL,
  "password" VARCHAR(42) NOT NULL,
  "first_name" VARCHAR(42) NOT NULL,
  "last_name" VARCHAR(42) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (email)
);

CREATE TABLE IF NOT EXISTS "USER_APPOINTMENT" (
  "id_appointment" SERIAL,
  "id_user" SERIAL 
  -- PRIMARY KEY,
  -- PRIMARY KEY (id_appointment, email)
);

CREATE TABLE IF NOT EXISTS "TIME_RANGE" (
  "id_time_range" SERIAL PRIMARY KEY,
  "opening_time" TIME NOT NULL,
  "closing_time" TIME NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_time_range)
);

CREATE TABLE IF NOT EXISTS "STRUCTURE" (
  "id_structure" SERIAL PRIMARY KEY,
  "type_structure" VARCHAR(42),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  -- ,
  -- PRIMARY KEY (id_structure)
);

-- MODIFY TABLES WITH FOREIGN KEYS

ALTER TABLE "INTERVENTION_CARAVAN" ADD FOREIGN KEY ("id_caravan") REFERENCES "CARAVAN" ("id_caravan");
ALTER TABLE "INTERVENTION_CARAVAN" ADD FOREIGN KEY ("id_intervention") REFERENCES "INTERVENTION" ("id_intervention");
ALTER TABLE "INTERVENTION" ADD FOREIGN KEY ("id_town") REFERENCES "TOWN" ("id_town");
ALTER TABLE "PERMANENCE_TOWN" ADD FOREIGN KEY ("id_town") REFERENCES "TOWN" ("id_town");
ALTER TABLE "PERMANENCE_TOWN" ADD FOREIGN KEY ("id_permanence") REFERENCES "PERMANENCE" ("id_permanence");
ALTER TABLE "APPOINTMENT" ADD FOREIGN KEY ("id_caravan") REFERENCES "CARAVAN" ("id_caravan");
ALTER TABLE "APPOINTMENT" ADD FOREIGN KEY ("id_permanence") REFERENCES "PERMANENCE" ("id_permanence");
ALTER TABLE "APPOINTMENT" ADD FOREIGN KEY ("id_support") REFERENCES "SUPPORT" ("id_support");
ALTER TABLE "PERMANENCE" ADD FOREIGN KEY ("id_structure") REFERENCES "STRUCTURE" ("id_structure");
ALTER TABLE "USER_APPOINTMENT" ADD FOREIGN KEY ("id_user") REFERENCES "USER" ("id_user");
ALTER TABLE "USER_APPOINTMENT" ADD FOREIGN KEY ("id_appointment") REFERENCES "APPOINTMENT" ("id_appointment");

COMMIT;
