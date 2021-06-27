const points = [40, 100, 1, 5, 25, 10];

// Ordenando números em ordem crescente:
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

// Ordenando números em ordem decrescente:
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
