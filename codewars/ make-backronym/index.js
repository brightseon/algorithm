//preload variable: dict

var makeBackronym = function (string) {
    return string
        .split('')
        .map((s) => dict[s.toUpperCase()])
        .join(' ');
};

console.log(makeBackronym('dgm'));
console.log(makeBackronym('lkj'));
console.log(makeBackronym('interesting'));
console.log(makeBackronym('codewars'));
