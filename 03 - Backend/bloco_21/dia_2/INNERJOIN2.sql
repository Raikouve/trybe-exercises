SELECT
	c.customer_id,
	CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.email,
    c.address_id,
    a.address
FROM sakila.customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY customer_name DESC
LIMIT 100;