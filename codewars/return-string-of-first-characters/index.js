function makeString(s) {
    return s
        .split(' ')
        .map((s) => s[0])
        .join('');
}

console.log(makeString('sees eyes xray yoat'));
console.log(makeString('brown eyes are nice'));
console.log(makeString('cars are very nice'));
console.log(makeString('kaks de gan has a big head'));
