const digitize = (n) => {
    return `${n}`.split('').reduce((prev, current) => [+current, ...prev], []);
};

console.log(digitize(348597));
