function initializeNames(name) {
    const nameChunk = name.split(' ');

    if (nameChunk.length < 3) {
        return name;
    }

    return `${nameChunk[0]} ${nameChunk
        .slice(1, nameChunk.length - 1)
        .map((n) => `${n[0].toUpperCase()}.`)
        .join(' ')} ${nameChunk[nameChunk.length - 1]}`;
}

console.log(initializeNames('Jack Ryan'));
console.log(initializeNames('Lois Mary Lane'));
console.log(initializeNames('Dimitri'));
console.log(initializeNames('Alice Betty Catherine Davis'));
