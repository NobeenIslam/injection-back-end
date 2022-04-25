DROP TABLE IF EXISTS userinfo;

CREATE TABLE userinfo (
    id serial PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT INTO userinfo (username, password)
VALUES 
    ('MrPooey', 'vwh64ccn'),
    ('ATCashew', 'superman');

DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    itemname TEXT,
    count INTEGER
);

INSERT INTO inventory (itemname,count)
VALUES 
    ('hammer',3),
    ('spoon',3);