SELECT rating, AVG(length) AS avg_length
FROM sakila.film
GROUP BY rating
HAVING avg_length BETWEEN 115.0 AND 121.50
ORDER BY avg_length DESC;