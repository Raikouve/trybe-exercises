SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'R' AND rating <> 'NC-17'
ORDER BY replacement_cost DESC, title
LIMIT 100;