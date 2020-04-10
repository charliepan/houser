CREATE TABLE houses
(
  id SERIAL PRIMARY KEY,
  housename TEXT,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(2),
  zip INTEGER
);

INSERT INTO houses(housename, address, city, state, zip)
VALUES ('Condominium', '5000 Random St', 'Carrolton', 'TX', 75007),
       ('Duplex', '200 Lorem St', 'Coppell', 'TX', 75077),
       ('Townhouse', '4500 Ipsum Dr', 'Denton', 'TX', 75097);