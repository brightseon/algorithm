var capitals = function (word) {
    return word.split('').reduce((a, b, i) => {
        if (/[a-z]/g.test(b)) return a;

        return [...a, i];
    }, []);
};

console.log(capitals('CodEWaRs'));
