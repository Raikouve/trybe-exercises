const numbers = [50, 85, -30, 3, 15];

const biggerNum = (acc, num) => (num > acc) ? num : acc;

const getBiggerNum = numbers.reduce((biggerNum));

console.log(getBiggerNum);
