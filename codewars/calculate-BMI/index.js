function bmi(weight, height) {
    const result = weight / Math.pow(height, 2);

    if (result <= 18.5) return 'Underweight';
    if (result <= 25.0) return 'Normal';
    if (result <= 30) return 'Overweight';

    return 'Obese';
}

console.log(bmi(80, 1.8));
