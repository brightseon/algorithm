function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XX' ? 'daughter' : 'son'}.`;
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));
