function predictAge(...ages) {
    const squaredSum = ages.reduce((sum, age) => sum + age ** 2, 0);
    const result = Math.sqrt(squaredSum) / 2;

    return Math.floor(result);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
