SELECT
	a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name),
    f.film_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;