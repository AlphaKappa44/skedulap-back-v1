BEGIN;

-- -- USERS
INSERT INTO "user" ("id", "email", "password", "first_name", "last_name") VALUES
(1, 'Jean-michel.Lagirafe@lcdmn.org', '$2b$10$j/jY4QUKsI64rp.i2c0LdOI8HlVGh82aTs0jK9cgu/u53lxBjKwgO', 'Jean-Michel',"La Girafe"),
(2, 'Jean-kack.Lepopotame@lcdmn.org', '$2b$10$yrZmZroeyk/e0eP0KBOVv.ZMug7PEID8MaawaZxr023A.PzKsyT6m', 'Jean-kack',"Le popotame");
(3, 'f.prie@mail.com', '$2b$10$bUoCH2jOetZZLvBMupKk2OIPt471bgIi0NFRzvYx8pj.6IhpfBVUe', 'Florian',"Prie"),
(4, 'Benjamin@lcdmn.org', '$2b$10$hCw3NZFHJtMKf/x8e3Y43.s0JTBZk1tBFiL1nrOxYynbx3k/d5.uG', 'Benjamin', 'digital4better'),
(5, 'Cynthia@lcdmn.org', '$2b$10$BZytxQVNd5xHGtcP6KcZ0.91YsRrOqOYfXGQlZlU6Cbg9tpuM0rl2', 'Cynthia', 'Pechobar'),
(6, 'alexandre@lcdmn.org', '$2b$10$FJQhnn2s450CxtAh6.D0teJl1oaEEE69YnIKwVk0UYx288wBae12S', 'Alexandre', ''),
(7, 'felicite@lcdmn.org', '$2b$10$6Nuct/rOYWNC51LZELsSLuQV015p5/bb9E3xg.girOOIn4P7c3HwK', 'Félicité', 'DeVincennes'),
(8, 'marie.cambodia@yopmail.com', '$2b$10$Ye2AvHbSZrGjTjDjzm7FPegxB.iQw//yCYihCDNcPI2JhCimcncLW', 'Marie', 'DeQuimperlé'),
(9, 'simondemontreal@laposte.net', '$2b$10$d6pBCdawfZu4SbgGTg6Ei.CGBROLQnxzE0IfswQ.qWJ80pVX1xCLS', 'Simon', 'DeMontreal');
-- (99, 'toto@test.insert', 'MDPiNSERTiNTO', 'Insert', 'Into');
-- TOWNS
INSERT INTO "town" ("id", "name", "postcode") VALUES
(1, 'Nantes Place Mendès France Antenne AXEL', '44100'),
(2, 'Nantes Chantenay EDS', '44100'),
(3, 'Nantes Michelet EDS', '44000'),
(4, 'Nantes Talensac EDS', '44000'),
(5, 'Saint-Mars-Du-Désert Mairie', '44850'),
(6, 'Nantes Breil -ATELIER PARTAGE', '44100'),
(7, 'Sucé-Sur-Erdre ', '44240'),
(8, 'Nantes René Cassin EDS', '44300'),
(9, 'Nantes Vincent Gâche AGIRC ARRCO', '44200'),
(10, 'Nantes Dalby-Doulon-Malakoff EDS', '44034');

INSERT INTO "caravan" ("id", "name") VALUES
(1, 'Coccinet');

INSERT INTO "support" ("id", "type_support") VALUES
(1, 'Education'),
(2, 'Social'),
(3, 'Autre');

COMMIT;


----------------------------- TOWNS--------------------------------
-- Lundi
-- Antenne AXEL
-- 60 boulevard Winston Churchill à Nantes (Place Mendès France)
-- de 9h à 12h30

-- Espace Départemental des Solidarités Chantenay
-- Place de la Liberté à Nantes
-- de 14h à 17h

-- Mardi
-- Espace Départemental des Solidarités Michelet
-- 95 Bd Eugène Orieux, 44000 Nantes
-- de 9h à 12h les semaines paires

-- Espace Départemental des Solidarités Talensac
-- 9 Rue Jeanne d'Arc, 44000 Nantes
-- de 9h à 13h les semaines impaires

-- Mairie de Saint-Mars-Du-Désert
-- 1 Place Malraux, 44850 Saint-Mars-du-Désert
-- de 9h à 13h

-- Atelier partagé
-- 38 rue du Breil à Nantes
-- Tramway : ligne 3, arrêt Sainte Thérèse ou Longchamp
-- Bus : ligne 10 arrêt Stade SNUC ou ligne 54 arrêt Petit Carcouet
-- Voiture : parking gratuit en face du pôle associatif
-- de 14h à 18h

-- Mercredi
-- Ville de Sucé-Sur-Erdre
-- 25 Rue de la Mairie, 44240 Sucé-sur-Erdre
-- de 9h à 12h

-- Jeudi
-- Espace Départemental des Solidarités René Cassin
-- 6 boulevard René Cassin à Nantes
-- de 14h à 17h

-- Vendredi
-- Espace Emploi AGIRC ARRCO
-- 32 Boulevard Vincent Gâche à Nantes
-- de 9h à 12h30

-- Espace départemental des solidarités Nantes Dalby-Doulon-Malakoff - site de Malakoff
-- 80 boulevard de Sarrebrück CS 93405 44034 Nantes
-- de 14h à 17h
----------------------------- USERS.json---------------------------
-- [
-- {
-- id: 1,
-- email: "Jean-michel.Lagirafe@lcdmn.org",
-- password: "$2b$10$j/jY4QUKsI64rp.i2c0LdOI8HlVGh82aTs0jK9cgu/u53lxBjKwgO",
-- first_name: "Jean-Michel",
-- last_name: "La Girafe"
-- },
-- {
-- id: 2,
-- email: "Jean-kack.Lepopotame@lcdmn.org",
-- password: "$2b$10$yrZmZroeyk/e0eP0KBOVv.ZMug7PEID8MaawaZxr023A.PzKsyT6m",
-- first_name: "Jean-kack",
-- last_name: "Le popotame"
-- },
-- {
-- id: 3,
-- email: "f.prie@mail.com",
-- password: "$2b$10$bUoCH2jOetZZLvBMupKk2OIPt471bgIi0NFRzvYx8pj.6IhpfBVUe",
-- first_name: "Florian",
-- last_name: "Prie"
-- },
-- {
-- id: 4,
-- email: "Benjamin@lcdmn.org",
-- password: "$2b$10$hCw3NZFHJtMKf/x8e3Y43.s0JTBZk1tBFiL1nrOxYynbx3k/d5.uG",
-- first_name: "Benjamin",
-- last_name: "digital4better"
-- },
-- {
-- id: 5,
-- email: "Cynthia@lcdmn.org",
-- password: "$2b$10$BZytxQVNd5xHGtcP6KcZ0.91YsRrOqOYfXGQlZlU6Cbg9tpuM0rl2",
-- first_name: "Cynthia",
-- last_name: "Pechobar"
-- },
-- {
-- id: 6,
-- email: "alexandre@lcdmn.org",
-- password: "$2b$10$FJQhnn2s450CxtAh6.D0teJl1oaEEE69YnIKwVk0UYx288wBae12S",
-- first_name: "Alexandre",
-- last_name: "DeVincennes"
-- },
-- {
-- id: 7,
-- email: "felicite@lcdmn.org",
-- password: "$2b$10$6Nuct/rOYWNC51LZELsSLuQV015p5/bb9E3xg.girOOIn4P7c3HwK",
-- first_name: "Félicité",
-- last_name: "DeNantes"
-- },
-- {
-- id: 8,
-- email: "marie.cambodia@yopmail.com",
-- password: "$2b$10$vkQrNd8WynSIUlh.FMJBIuHe5/3IVNdZ2bI0CKRcOtSZJ0Jg/j7z6",
-- first_name: "Marie",
-- last_name: "DeQuimperlé"
-- },
-- {
-- id: 9,
-- email: "simondemontreal@laposte.net",
-- password: "$2b$10$Ye2AvHbSZrGjTjDjzm7FPegxB.iQw//yCYihCDNcPI2JhCimcncLW",
-- first_name: "DeMontreal",
-- last_name: "Simon"
-- },
-- {
-- id: 10,
-- email: "marie.cambodia@yopmail.com",
-- password: "$2b$10$SCVY78QKNWxq2stcCQuoqeUvM1FfzJihHsfHtJop69VozK1r3EgDO",
-- first_name: "Marie",
-- last_name: "DeQuimperlé"
-- }
-- ]