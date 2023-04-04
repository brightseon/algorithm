const orderedCount = function (text) {
    const textMap = text.split('').reduce((a, b) => {
        a.set(b, (a.get(b) || 0) + 1);

        return a;
    }, new Map());

    return [...textMap.keys()].map((key) => [key, textMap.get(key)]);
};

console.log(orderedCount('abracadabra'));
console.log(orderedCount('Code Wars'));
console.log(orderedCount('233312'));
