const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump - mpg * fuelLeft <= 0;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
