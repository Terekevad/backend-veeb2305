CREATE TABLE treks (
ID SERIAL PRIMARY KEY,
 name VARCHAR(255),
 latitude VARCHAR(255),
 longitude VARCHAR(255),
 price VARCHAR(255),
 image_url VARCHAR(255),
 start_time VARCHAR(255),
 end_time VARCHAR(255),
 description VARCHAR(255)
);

INSERT INTO treks (name, latitude, longitude, price, image_url, start_time, end_time)
VALUES ('Rattamatk ymber Ylemiste jarve', '59.3831602', '24.7373605', '10', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/%C3%9Clemiste_j%C3%A4rv_1936.png/220px-%C3%9Clemiste_j%C3%A4rv_1936.png', 'Laupaeva hommikul kell 10.00', 'Kell 14.00');