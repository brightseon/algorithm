function warnTheSheep(queue) {
    const idx = queue.indexOf('wolf');
    const count = queue.length - idx - 1;

    return count > 0
        ? `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`
        : 'Pls go away and stop eating my sheep';
}

console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']));
console.log(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']));
console.log(warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']));
console.log(warnTheSheep(['sheep', 'wolf', 'sheep']));
console.log(warnTheSheep(['wolf']));
console.log(warnTheSheep(['sheep', 'sheep', 'wolf']));
