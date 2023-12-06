## Task 1 - Countries Database

psql -U yuyi -h localhost -d countries
\dt
SELECT \* FROM country_name;
SELECT name FROM country_name ORDER BY RANDOM() LIMIT 10;

## Task 2 - Countries Database

Login to postgres

Create database

### Write a query that prints the top four movies by collection in millions?

`SELECT * FROM Movies ORDER BY CollectionInMillions DESC LIMIT 4;`

### Can you write a query to determine if any two actors share the same second name?

`SELECT DISTINCT a1.SecondName FROM Actors a1, Actors a2 WHERE a1.Id <> a2.Id AND a1.SecondName = a2.SecondName;`

### Write a query to count the number of actors who share the same second name. Print the second name along with the count.

`SELECT SecondName, COUNT(*) AS ActorCount FROM Actors GROUP BY SecondName HAVING COUNT(*) > 1;`

### Write a query to display all those actors who have acted in 2 or more movies.

`SELECT a.FirstName, a.SecondName, COUNT(mc MovieId) AS MovieCount FROM Actors a JOIN MovieCast mc ON a.Id = mc.ActorId GROUP BY a.Id HAVING COUNT(mc.MovieId) >= 2;`

### Find the actors of movie “Mr and Mrs. Smith” without using joins.

`SELECT * FROM Actors WHERE firstname = 'Brad' AND secondname = 'Pitt' OR firstname = 'Angelina' AND secondname = 'Jolie';`

### Print a list of movies and the actor(s) who participated in each movie ordered by movie name.

`SELECT m.Name AS MovieName, a.FirstName, a SecondName FROM Movies m JOIN MovieCast mc ON m.Id = mc.MovieId JOIN Actors a ON mc.ActorId = a.Id ORDER BY m.Name;`

### Print the count of actors in each movie.

`SELECT m.Name AS MovieName, COUNT(mc ActorId) AS ActorCount FROM Movies m JOIN MovieCast mc ON m.Id = mc.MovieId GROUP BY m Id, m.Name ORDER BY m.Name;`
