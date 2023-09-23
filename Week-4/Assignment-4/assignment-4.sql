/*assignment4-1*/
/*id is a primary key, as well as a foreign key*/
SELECT a.id, a.title, b.email FROM article AS a
LEFT JOIN user AS b ON a.id = b.id;


/*assignment4-2*/
SELECT * FROM article Limit 6,6;