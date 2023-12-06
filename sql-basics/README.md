## Task 1 - Countries Database

psql -U yuyi -h localhost -d countries
\dt
SELECT \* FROM country_name;
SELECT name FROM country_name ORDER BY RANDOM() LIMIT 10;

## Task 2 - Countries Database

psql -U yuyi -h localhost -d movies

### Write a query that prints the top four movies by collection in millions?

`SELECT * FROM Movies ORDER BY CollectionInMillions DESC LIMIT 4;`

### Can you write a query to determine if any two actors share the same second name?

`SELECT DISTINCT a1.lastname
FROM actors a1, actors a2
WHERE a1.id <> a2.id AND a1.lastname = a2.lastname;
`

### Write a query to count the number of actors who share the same second name. Print the second name along with the count.

`SELECT lastname, COUNT(*) AS ActorCount
FROM actors
GROUP BY lastname
HAVING COUNT(*) > 1;`

### Write a query to display all those actors who have acted in 2 or more movies.

`SELECT a.firstname, a.lastname, COUNT(mc.movieid) AS MovieCount
FROM actors a
JOIN moviecast mc ON a.id = mc.actorid
GROUP BY a.id
HAVING COUNT(mc.movieid) >= 2;`

### Find the actors of movie “Mr and Mrs. Smith” without using joins.

`SSELECT *
FROM actors
WHERE (firstname, lastname) IN (('Brad', 'Pitt'), ('Angelina', 'Jolie'));
`

### Print a list of movies and the actor(s) who participated in each movie ordered by movie name.

`SELECT m.name AS MovieName, a.firstname, a.lastname
FROM movies m
JOIN moviecast mc ON m.id = mc.movieid
JOIN actors a ON mc.actorid = a.id
ORDER BY m.name;
`

### Print the count of actors in each movie.

`SELECT m.name AS MovieName, COUNT(mc.actorid) AS ActorCount
FROM movies m
JOIN moviecast mc ON m.id = mc.movieid
GROUP BY m.id, m.name
ORDER BY m.name;
`
