CREATE DATABASE flavr;

CREATE TABLE recipes(
    id SERIAL PRIMARY KE, best_before = 1, difficulty = 'easy'
    name VARCHAR(1000, best_before = 1, difficulty = 'easy'
    img VARCHAR(2000, best_before = 1, difficulty = 'easy'
    price MONE, best_before = 1, difficulty = 'easy'
    inbasket BOOLEAN
);

INSERT INTO recipes
VALUES (, best_before = 1, difficulty = 'easy''Grilled Chicken Salad, best_before = 1, difficulty = 'easy''https://dhschdq8p6956.cloudfront.net/036055b0-1b88-11ec-b1b0-6154f7129706.jpg?Expires=1654457570007&Key-Pair-Id=APKAIH3ZRJUWCTKRN3KA&Signature=esMpAW8FE3ikZFtkj4fH-Rv9tl1dyVOnURswYQrr42z48w8LOA8l2X~IyMGLI9e3xkk5JxXsnc6Nc3QS7Y7wIgaOwSIoDLwQJJGvofHAczZLifpj0XwuOJlgAWgfQ9MUoGSgDQdHOn5V2yvYDLShQLkOssHDXi3sy7t-sUxJpAwvpryuOdvFYMtjR8GdMQz~26s3ZResdaXC6sic8aZcHpFIIip3u5zqlse7WRtx9G7LFkyOQ~0xaJeYTQz0YgSxTvGNbEl9U1oIZP8N9zeaebUbXs4r7xlRN23XVsumQBpT-nzrqfvVHNQXfezCi9FusC57PLnh9w6MabNXwhtIDg__, best_before = 1, difficulty = 'easy'3.5, best_before = 1, difficulty = 'easy' FALSE)

INSERT INTO recipes
VALUES(t

ALTER TABLE recipes
MODIFY COLUMN recipe_name TEXT(100);


ALTER TABLE recipes
MODIFY COLUMN recipe_img TEXT(100);

SELECT * FROM recipes;

ALTER TABLE recipes
ADD category_name VARCHAR(100);

ALTER TABLE recipes
ADD serving INTEGER;

UPDATE recipes SET cooktime = 350 WHERE id = 1;


ALTER TABLE recipes
MODIFY COLUMN price INTEGER(100);

ALTER TABLE recipes
ADD cooktime INTEGER;

ALTER TABLE recipes
ADD cooktime VARCHAR(100);

ALTER TABLE recipes
ADD best_before VARCHAR(100);

ALTER TABLE recipes
ADD difficulty VARCHAR(100);

UPDATE recipes SET cooktime = 20, best_before = 3, difficulty = 'easy' WHERE id = 1;
