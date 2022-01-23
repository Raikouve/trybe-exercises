SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost;