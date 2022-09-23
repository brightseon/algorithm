function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled) / (blueStart + redStart - (bluePulled + redPulled));
}

console.log(guessBlue(5, 5, 2, 3));
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6));
