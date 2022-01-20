SELECT * FROM sakila.film
WHERE rating = 'R' OR rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;