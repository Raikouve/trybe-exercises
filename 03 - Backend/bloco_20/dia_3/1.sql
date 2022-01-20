SELECT * FROM sakila.customer
WHERE store_id = 2
AND active = FALSE
AND first_name <> 'KENNETH'
ORDER BY first_name;