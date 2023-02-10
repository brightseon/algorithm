function removeRotten(bagOfFruits) {
    if (!bagOfFruits) return [];

    return bagOfFruits.map((fruit) => fruit.replace(/rotten/i, '').toLowerCase());
}

console.log(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange']));
console.log(removeRotten([]));
