SELECT district, COUNT(address) AS address_quantity
FROM sakila.address
GROUP BY district
ORDER BY address_quantity DESC;